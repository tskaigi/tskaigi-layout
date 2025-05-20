import { TimeTable, TrackItem } from "../../schema/TimeTable";

const toggleTalkDay1List = [
  {
    speakerName: "Anthony Fu",
    title: "The New Powerful ESLint Config with Type Safety",
    social: {
      github: "https://github.com/antfu",
      link: "",
      twitter: "https://x.com/antfu7",
    },
  },
  {
    speakerName: "kkk4oru",
    title: "checker.tsに対して真剣に向き合う",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    speakerName: "横沢 諒",
    title:
      "撤退危機からのピボット：4年目エンジニアがリードする TypeScript で挑む事業復活",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/yokkori_dev",
    },
  },
  {
    speakerName: "Hayato Okumoto",
    title: "推し活を支えるAngularアプリ量産体制",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/falcon_8823",
    },
  },
  {
    speakerName: "matano",
    title: "生成AI時代にフルスタックTypeScriptの夢を見る",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/matamatanot",
    },
  },
  {
    speakerName: "高橋 修平",
    title: "AsyncAPIを使ってPub/Subを型安全にする",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    speakerName: "プログラミングをするパンダ",
    title:
      "TypeScriptで実践するクリーンアーキテクチャ ― WebからもCLIからも使えるアプリ設計",
    social: {
      github: "",
      link: "https://panda-program.com/",
      twitter: "",
    },
  },
  {
    speakerName: "takanorip",
    title: "堅牢なデザインシステムをつくるためのTypeScript活用",
    social: {
      github: "https://github.com/takanorip",
      link: "https://takanorip.com",
      twitter: "https://x.com/takanoripe",
    },
  },
  {
    speakerName: "Yuku Kotani",
    title: "AI Coding Agent Enablement in TypeScript",
    social: {
      github: "https://github.com/yukukotani",
      link: "https://yuku.dev",
      twitter: "https://x.com/yukukotani",
    },
  },
  {
    speakerName: "ymrl",
    title: "TypeScriptとReactで、WAI-ARIAの属性を正しく利用する",
    social: {
      github: "https://github.com/ymrl",
      link: "",
      twitter: "https://x.com/ymrl",
    },
  },
  {
    speakerName: "Sosuke Suzuki",
    title: "TypeScriptとは何であって何でなく、誰のもので、どこへ向かうのか",
    social: {
      github: "https://github.com/sosukesuzuki",
      link: "",
      twitter: "https://x.com/__sosukesuzuki",
    },
  },
  {
    speakerName: "unvalley",
    title: "Rust製JavaScript/TypeScript Linterにおけるプラグイン実装の裏側",
    social: {
      github: "https://github.com/unvalley",
      link: "https://unvalley.me",
      twitter: "https://x.com/unvalley_",
    },
  },
] satisfies TrackItem[];

const toggleTalkDay2List = [
  {
    title: "TypeScriptネイティブ移植観察レポート TSKaigi 2025",
    speakerName: "berlysia",
    social: {
      twitter: "https://x.com/berlysia",
      github: "https://github.com/berlysia",
      link: "https://berlysia.net/",
    },
  },
  {
    title:
      "TypeScript Language Service Plugin で CSS Modules の開発体験を改善する",
    speakerName: "mizdra",
    social: {
      github: "https://github.com/mizdra",
      link: "https://www.mizdra.net/",
      twitter: "https://x.com/mizdra",
    },
  },
  {
    title: "複雑なフォームを継続的に開発していくための技術選定・設計・実装",
    speakerName: "izumin5210",
    social: {
      twitter: "https://x.com/izumin5210",
      github: "https://github.com/izumin5210",
      link: "",
    },
  },
  {
    title: "バックエンドのコードファーストなOpenAPIスキーマ駆動開発",
    speakerName: "鳥居 雄仁",
    social: {
      github: "",
      link: "https://blog.kinto-technologies.com/authors/dc770e2b-4ed2-5f16-81ae-fb103d5b7278/",
      twitter: "https://x.com/yu_torii",
    },
  },
  {
    title: "バランスを見極めよう！実装の意味を明示するための型定義",
    speakerName: "畑田祥太",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/whatasoda",
    },
  },
  {
    title:
      "PandaCSSでつくる、型で守られたスタイリング基盤 ～TypeScript × デザインシステム管理の実践アーキテクチャ～",
    speakerName: "田代 敬太",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/Dendam_X",
    },
  },
  {
    title:
      "TSでシステムが堅牢になっていくさまをスポンサーになるたびに報告 〜型定義から始めるリファクタリング編",
    speakerName: "井上 心太",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title:
      "技術書をソフトウェア開発する - jsprimerの10年から学ぶ継続的メンテナンスの技術",
    speakerName: "azu",
    social: {
      twitter: "https://x.com/azu_re",
      github: "https://github.com/azu",
      link: "https://jsprimer.net/",
    },
  },
  {
    title: "ts-morphを利用して編集可能なコード生成を実現する",
    speakerName: "池奥裕太/@yuta-ike",
    social: {
      github: "https://github.com/yuta-ike",
      link: "https://zenn.dev/yuta_ike",
      twitter: "https://x.com/Selria1",
    },
  },
  {
    title:
      "機能的凝集の概念を用いて複数ロール、類似の機能を多く含むシステムのフロントエンドのコンポーネントを適切に分割する",
    speakerName: "IkedaNoritaka",
    social: {
      github: "https://github.com/NoritakaIkeda",
      link: "https://zenn.dev/omotidaisukijp",
      twitter: "https://x.com/omotidaisukijp",
    },
  },
  {
    title: "TS特化Clineプログラミング",
    speakerName: "mizchi",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "型がない世界に生まれ落ちて 〜TypeScript運用進化の歴史〜",
    speakerName: "成原 聡一朗",
    social: {
      github: "",
      link: "https://suzuri.jp/VoodooRhythm",
      twitter: "",
    },
  },
  {
    title: "Type ChallengesにPRを出して新しい問題を追加した話",
    speakerName: "Kanon",
    social: {
      twitter: "https://x.com/ysknsid25",
      github: "https://github.com/ysknsid25",
      link: "https://dev.inorinrinrin.com/",
    },
  },
  {
    title: "ProxyとTypeScriptのおいしい関係",
    speakerName: "Motoki Shakagori/ほとけ",
    social: {
      twitter: "https://x.com/schwmtl",
      github: "https://github.com/m-shaka",
      link: "https://linktr.ee/mshaka",
    },
  },
  {
    title: "Panda-CSS はどのように型安全にしているのか",
    speakerName: "加藤貴裕",
    social: {
      twitter: "https://x.com/doz13189",
      github: "https://github.com/doz13189",
      link: "",
    },
  },
] satisfies TrackItem[];

const ascendTalkDay1List = [
  {
    title: "高度な型付け、どう教える？",
    speakerName: "progfay",
    social: {
      twitter: "https://x.com/progfay",
      github: "https://github.com/progfay",
      link: "",
    },
  },
  {
    title: "静的解析で実現したいことから逆算して学ぶTypeScript Compiler",
    speakerName: "Kazushi Konosu",
    social: {
      link: "",
      twitter: "https://x.com/kazushikonosu",
      github: "https://github.com/kazushisan",
    },
  },
  {
    title: "Language Serverと喋ろう",
    speakerName: "ぴざきゃっと",
    social: {
      twitter: "https://x.com/pizzacat83b",
      github: "https://github.com/pizzacat83",
      link: "https://pizzacat83.com",
    },
  },
  {
    title: "推論された型の移植性エラーTS2742に挑む",
    speakerName: "elecdeer",
    social: {
      twitter: "https://x.com/elecdeerdev",
      github: "https://github.com/elecdeer",
      link: "https://elecdeer.dev/",
    },
  },
  {
    title:
      "TSConfig Solution Style & subpath imports でファイル単位で型を切り替える",
    speakerName: "kotori",
    social: {
      twitter: "https://x.com/maminami_minami",
      github: "https://github.com/minami-minami",
      link: "",
    },
  },
  {
    title: "主要ライブラリの実例に学ぶ、TypeScriptで実現する型安全な座標定義",
    speakerName: "原口 公輔",
    social: {
      twitter: "https://x.com/Tirol_JPN",
      github: "https://github.com/TirolJPN",
      link: "https://tirol-jpn.com/pages/about",
    },
  },
  {
    title:
      "コンポーネントライブラリで実現する、アクセシビリティの正しい実装パターン",
    speakerName: "たじまん",
    social: {
      twitter: "https://x.com/schktjm",
      github: "https://github.com/schktjm",
      link: "https://bsky.app/profile/schktjm.bsky.social",
    },
  },
  {
    title:
      "AWS LambdaをTypeScriptで動かして分かった、Node.jsのTypeScriptサポートの利点と課題",
    speakerName: "Masaki Suzuki",
    social: {
      twitter: "https://x.com/makky12",
      github: "https://github.com/smt7174",
      link: "https://makky12.hatenablog.com/",
    },
  },
  {
    title:
      "fast-checkとneverthrowのPBT+Result型で堅牢なビジネスロジックを実現する",
    speakerName: "上田慶祐",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "Interface vs Types 〜型推論が過多推論〜",
    speakerName: "omote",
    social: {
      link: "",
      twitter: "https://x.com/HirokiOmote",
      github: "https://github.com/HirokiOmote",
    },
  },
  {
    title: "Wasmを用いて他言語資産をTypeScriptで活用する",
    speakerName: "赤木 勇統",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title:
      "型パズルを好きになるために、競プロを型システムだけで解いてみることにした",
    speakerName: "いまいまい",
    social: {
      twitter: "https://x.com/imaimai17468",
      github: "https://github.com/imaimai17468",
      link: "https://imaimai.tech/",
    },
  },
  {
    title:
      "タイプレベルリファクタリング奮闘記〜この「型パズル」は読めません！〜",
    speakerName: "Yugo Yagita",
    social: {
      github: "https://github.com/ygkn",
      link: "",
      twitter: "https://x.com/ygkn35034",
    },
  },
] satisfies TrackItem[];

const ascendTalkDay2List = [
  {
    title: "フロントエンドがTypeScriptなら、バックエンドはPHPでもいいじゃない",
    speakerName: "富所 亮",
    social: {
      twitter: "https://x.com/hanhan1978",
      github: "https://github.com/hanhan1978",
      link: "https://blog.hanhans.net",
    },
  },
  {
    title: "Pragmatic Functional Programming in TypeScript",
    speakerName: "yasaichi",
    social: {
      twitter: "https://x.com/_yasaichi",
      github: "https://github.com/yasaichi",
      link: "https://blog.yasaichi.com/",
    },
  },
  {
    title:
      "型システムを活用した ESLint カスタムルール開発入門 〜固有ドメインにおけるコーディング規約を開発する〜",
    speakerName: "山梨 蓮",
    social: {
      twitter: "https://x.com/ren_yamanashi",
      github: "https://github.com/ren-yamanashi",
      link: "https://zenn.dev/yamaren",
    },
  },
  {
    title: "VueUse から学ぶ実践 TypeScript",
    speakerName: "ツノ",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/2nofa11",
    },
  },
  {
    title: "型推論の扉を開く―集合論と構造的型制約で理解する中級へのステップ",
    speakerName: "栃川晃佑",
    social: {
      github: "",
      link: "https://product.plex.co.jp/",
      twitter: "https://x.com/Web_TochiTech",
    },
  },
  {
    title: "TypeScript ASTとJSDocで実現するコードの自動削除",
    speakerName: "川野賢一",
    social: {
      twitter: "https://x.com/k_rf_",
      github: "https://github.com/k-rf",
      link: "",
    },
  },
  {
    title:
      "これは型破り？型安全？真実はいつもひとつ！（じゃないかもしれない）TypeScriptクイズ〜〜〜〜！！！！！",
    speakerName: "君田 祥一",
    social: {
      twitter: "https://x.com/kimi_koma1111",
      github: "https://github.com/kimitashoichi",
      link: "https://kimitashoichi.github.io/Profile",
    },
  },
  {
    title: "Lookback TypeScript ESM support and what should we do now.",
    speakerName: "Saji",
    social: {
      github: "https://github.com/sajikix",
      link: "https://www.sajiki.dev/",
      twitter: "https://x.com/sajikix",
    },
  },
  {
    title: `"良い"TSのコードを書く為のマインドセット`,
    speakerName: "Kei",
    social: {
      twitter: "https://x.com/kei_english_ca",
      github: "https://github.com/kei95",
      link: "https://www.youtube.com/@kei_NA",
    },
  },
  {
    title: "令和最新版TypeScriptでのnpmパッケージ開発",
    speakerName: "odan",
    social: {
      twitter: "https://x.com/odan3240",
      github: "https://github.com/odanado",
      link: "",
    },
  },
  {
    title: "コンパイルオプションで変わる型世界",
    speakerName: "池田敬祐",
    social: {
      twitter: "https://x.com/ike_keichan",
      github: "https://github.com/ike-keichan",
      link: "",
    },
  },
  {
    title: "TypeScriptのmoduleオプションを改めて整理する",
    speakerName: "おおいし (bicstone)",
    social: {
      twitter: "https://x.com/bicstone_me",
      github: "https://github.com/bicstone",
      link: "https://bicstone.me/",
    },
  },
  {
    title: "Project Referencesを活用した実行環境ごとのtsconfig最適化",
    speakerName: "Toshiki Itai",
    social: {
      github: "",
      link: "",
      twitter: "https://x.com/itatchi3_",
    },
  },
] satisfies TrackItem[];

const leveragesTalkDay1List = [
  {
    title: "スキーマと型で拓く Full-Stack TypeScript",
    speakerName: "Sohei Takeno",
    social: {
      github: "https://github.com/Altech",
      link: "",
      twitter: "https://x.com/Altech_2015",
    },
  },
  {
    title: "SignalとObservable―新たなデータモデルを解きほぐす",
    speakerName: "lacolaco",
    social: {
      twitter: "https://x.com/laco2net",
      github: "https://github.com/lacolaco",
      link: "https://lacolaco.net",
    },
  },
  {
    title: "TSConfigからTypeScriptの世界を覗く",
    speakerName: "らいと",
    social: {
      github: "https://github.com/light-planck",
      link: "https://zenn.dev/light_planck",
      twitter: "https://x.com/light_planck",
    },
  },
  {
    title: "学生でもここまで出来る！ハッカソンで爆速開発して優勝した話",
    speakerName: "かわちゃん",
    social: {
      github: "https://github.com/YutaK1026",
      link: "https://kawaport.pages.dev/",
      twitter: "https://x.com/inheritans1904",
    },
  },
  {
    title: "『Python→TypeScript』オンボーディング奮闘記",
    speakerName: "龍野 卓己",
    social: {
      twitter: "https://x.com/takumi_t_jp",
      github: "https://github.com/Exerea",
      link: "https://note.com/toggle/n/n25ce52d3a2ae",
    },
  },
  {
    title:
      "転生したらTypeScriptのEnumだった件～型安全性とエコシステムの変化で挫けそうになっているんだが～",
    speakerName: "やまのく",
    social: {
      twitter: "https://x.com/yamanoku",
      github: "https://github.com/yamanoku",
      link: "https://yamanoku.net",
    },
  },
  {
    title: "URLPatternから始めるWebフレームワーク開発入門",
    speakerName: "ryuapp",
    social: {
      github: "https://github.com/ryuapp",
      link: "https://ryu.app",
      twitter: "",
    },
  },
  {
    title: "TypeScriptエンジニアがAndroid開発の世界に飛び込んだ話",
    speakerName: "yui_tang",
    social: {
      twitter: "https://x.com/yui_tang",
      github: "https://github.com/YUISAKAMOTO",
      link: "",
    },
  },
  {
    title:
      "Valibot Schema Driven UI - ノーコードWebサイトビルダーを実装してみよう！",
    speakerName: "宮城広隆(@MH4GF)",
    social: {
      twitter: "https://x.com/MH4GF",
      github: "https://github.com/mh4gf",
      link: "https://mh4gf.dev",
    },
  },
  {
    title: "Rust製JavaScript EngineのTypeScriptサポート",
    speakerName: "yossydev",
    social: {
      twitter: "https://x.com/yossydev",
      github: "https://github.com/yossydev",
      link: "https://yossy.dev/",
    },
  },
  {
    title: "TypeScript だけを書いて Tauri でデスクトップアプリを作ろう",
    speakerName: "小松 翔 (tris)",
    social: {
      twitter: "https://x.com/tris5572",
      github: "https://github.com/tris5572",
      link: "",
    },
  },
  {
    title: "型安全なDrag and Dropの設計を考える",
    speakerName: "yudppp",
    social: {
      twitter: "https://x.com/yudppp",
      github: "https://github.com/yudppp",
      link: "https://blog.yudppp.com/",
    },
  },
  {
    title: "GitHub ActionsをTypeScriptで作ろう！",
    speakerName: "じょーし（上司陽平）",
    social: {
      twitter: "https://x.com/paper2parasol",
      github: "https://github.com/paper2",
      link: "https://paper2.hatenablog.com/",
    },
  },
] satisfies TrackItem[];

const leveragesTalkDay2List = [
  {
    title:
      "TypeScriptとVercel AI SDKで実現するLLMアプリケーション開発：フロントエンドからバックエンド、そしてChrome拡張まで",
    speakerName: "加瀬健太（Kesin11）",
    social: {
      twitter: "https://x.com/Kesin11",
      github: "https://github.com/Kesin11",
      link: "https://zenn.dev/kesin11",
    },
  },
  {
    title: "feature flag 自動お掃除のための TypeScript プログラム変換",
    speakerName: "azrsh",
    social: {
      github: "https://github.com/azrsh",
      link: "https://azr.sh/",
      twitter: "https://x.com/a2r5h",
    },
  },
  {
    title: "Web Streams APIの基本と実践、TypeScriptでの活用法",
    speakerName: "tasshi",
    social: {
      github: "https://github.com/tasshi-me",
      link: "https://tasshi.me/",
      twitter: "https://x.com/tasshi_me",
    },
  },
  {
    title: "Result型、自前で書くか、ライブラリ使うか",
    speakerName: "majimaccho",
    social: {
      twitter: "https://x.com/majimaccho_",
      github: "https://github.com/majimaccho",
      link: "https://zenn.dev/mj2mkt",
    },
  },
  {
    title: "型付け力を強化するための Hoogle のすゝめ",
    speakerName: "TAKASE Kazuyuki (@Guvalif)",
    social: {
      twitter: "https://x.com/guvalif",
      github: "https://github.com/Guvalif",
      link: "https://www.wantedly.com/id/guvalif",
    },
  },
  {
    title: "React19で変化したuseReducerの型から学ぶTypeScriptの型推論",
    speakerName: "k8o",
    social: {
      twitter: "",
      github: "https://github.com/k35o",
      link: "https://k8o.me",
    },
  },
  {
    title:
      "クラサバ境界を失った現代 TypeScript コードベースに秩序をもたらしたい",
    speakerName: "Yo Iwamoto",
    social: {
      twitter: "https://x.com/yoiwamoto",
      github: "https://github.com/yo-iwamoto",
      link: "https://yo-iwamoto.me",
    },
  },
  {
    title: "君だけのオリジナル async / await を作ろう",
    speakerName: "susisu",
    social: {
      twitter: "https://x.com/susisu2413",
      github: "https://github.com/susisu",
      link: "https://susisu.hatenablog.com/",
    },
  },
  {
    title:
      "TypeScript製IaCツールのAWS CDKが様々な言語で実装できる理由 〜他言語変換の仕組み〜",
    speakerName: "k.goto",
    social: {
      twitter: "https://x.com/365_step_tech",
      github: "https://github.com/go-to-k",
      link: "https://aws.amazon.com/jp/developer/community/heroes/kenta-goto/",
    },
  },
  {
    title: "ts-morph実践：型を利用するcodemodのテクニック",
    speakerName: "ypresto",
    social: {
      github: "https://github.com/ypresto",
      link: "",
      twitter: "https://x.com/yuya_presto",
    },
  },
  {
    title:
      "declaration mergingの威力：ライブラリアップデート時の書き換え作業を90%短縮するテクニック",
    speakerName: "Yuma Takei",
    social: {
      twitter: "https://x.com/yutake27",
      github: "https://github.com/yutake27",
      link: "https://zenn.dev/yutake27",
    },
  },
  {
    title: "バリデーションライブラリ徹底比較",
    speakerName: "田中勇太",
    social: {
      twitter: "https://x.com/nayuta999999",
      github: "https://github.com/Yuta123456",
      link: "",
    },
  },
  {
    title: "Standard Schema: スキーマライブラリの統一規格とは何か",
    speakerName: "Nozomu Ikuta",
    social: {
      link: "",
      twitter: "https://x.com/nozomuikuta",
      github: "https://github.com/nozomuikuta",
    },
  },
] satisfies TrackItem[];

export const timeTable = {
  trackOne: [...toggleTalkDay1List, ...toggleTalkDay2List],
  trackTwo: [...ascendTalkDay1List, ...ascendTalkDay2List],
  trackThree: [...leveragesTalkDay1List, ...leveragesTalkDay2List],
} as const satisfies TimeTable;
