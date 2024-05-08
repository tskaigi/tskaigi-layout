import { readFileSync, writeFileSync, unlinkSync } from "node:fs"
import { execSync } from 'node:child_process';
import { fileURLToPath } from "node:url";
import path from "node:path";
// import { SessionDetail } from "../submodule/tskaigi.github.io/typs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDataPath = path.resolve(__dirname, '../src/browser/dashboard/data/timeTable.ts');

const timetableDataPath = path.resolve(__dirname, '../submodule/tskaigi.github.io/constants/index.ts');
const timetableContent = readFileSync(timetableDataPath, 'utf-8');

const sessionDetailsDataPath = path.resolve(__dirname, '../submodule/tskaigi.github.io/constants/session_details.ts');
const sessionDetailsContent = readFileSync(sessionDetailsDataPath, 'utf-8');

const modifiedTimetableContent = '// @ts-nocheck\n' + timetableContent
const modifiedSessionDetailsContent = '// @ts-nocheck\n' + sessionDetailsContent

const tempTimetableFilePath = path.join(__dirname, 'index_temp.ts');
writeFileSync(tempTimetableFilePath, modifiedTimetableContent, 'utf8');

const tempSessionDetailsFilePath = path.join(__dirname, 'session_details_temp.ts');
writeFileSync(tempSessionDetailsFilePath, modifiedSessionDetailsContent, 'utf8');

const timeTable = {
  trackOne: [],
  trackTwo: [],
  trackThree: [],
};

Promise.all([
  import(tempTimetableFilePath),
  import(tempSessionDetailsFilePath),
]).then(([timetableModule, sessionDetailsModule]) => {
  const {TIME_TABLE_DATA} = timetableModule;
  const {SESSSION_DETAILS} = sessionDetailsModule;

  (TIME_TABLE_DATA as any[][]).forEach(tableList => {
    tableList.forEach((table) => {
      if (!table) {
        return;
      }
      if (Array.isArray(table.content)) {
        table.content.forEach((content: { title: string; displayName: string; username: string; }) => {
          if (!content || !content.title || !content.displayName || !content.username) {
            return;
          }

          // const sessionDetailsData: SessionDetail = SESSSION_DETAILS[content.username];
          const sessionDetailsData = SESSSION_DETAILS[content.username];

          if (content.title !== sessionDetailsData.title) {
            console.log(`title mismatch: 「${content.title}」 is not 「${sessionDetailsData.title}」(後者が優先されます)`);
          }
          if (content.displayName !== sessionDetailsData.displayName) {
            console.log(`displayName mismatch: 「${content.displayName}」 is not 「${sessionDetailsData.displayName}」(後者が優先されます)`);
          }

          const timeTableData = {
            title: sessionDetailsData.title,
            speakerName: sessionDetailsData.displayName,
            social: {
              github: sessionDetailsData?.socials?.github || '',
              link: sessionDetailsData?.additionalInfo || '',
              twitter: sessionDetailsData?.socials.xAccount || '',
            },
          };

          switch (table.track) {
            case 'Track1':
              timeTable.trackOne.push(timeTableData as never);
              break;
            case 'Track2':
              timeTable.trackTwo.push(timeTableData as never);
              break;
            case 'Track3':
              timeTable.trackThree.push(timeTableData as never);
              break;
            default:
              break;
          }
        });
      }
    });
  });

  writeFileSync(outputDataPath, `import type { TimeTable } from "../../schema/TimeTable";\n\nexport const timeTable = ${JSON.stringify(timeTable, null, 2)} as const satisfies TimeTable;\n`, 'utf8');
  execSync(`npx prettier --write ${outputDataPath}`)

  unlinkSync(tempTimetableFilePath);
  unlinkSync(tempSessionDetailsFilePath);
}).catch((err) => {
  console.error(err);
});
