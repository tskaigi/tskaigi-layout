import {TimeTable, TrackItem} from "../../schema/TimeTable";

const toggleTalkDay1List: TrackItem[] = [
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
    speakerName: "プログラミングをするパンダ",
    title: "TypeScriptで実践するクリーンアーキテクチャ ― WebからもCLIからも使えるアプリ設計",
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
      github: "takanorip",
      link: "https://takanorip.com",
      twitter: "takanoripe",
    },
  },
  {
    speakerName: "Yuku Kotani",
    title: "AI Coding Agent Enablement in TypeScript",
    social: {
      github: "yukukotani",
      link: "https://yuku.dev",
      twitter: "yukukotani",
    },
  },
  {
    speakerName: "ymrl",
    title: "TypeScriptとReactで、WAI-ARIAの属性を正しく利用する",
    social: {
      github: "ymrl",
      link: "",
      twitter: "ymrl",
    },
  },
  {
    speakerName: "Sosuke Suzuki",
    title: "TypeScriptとは何であって何でなく、誰のもので、どこへ向かうのか",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    speakerName: "unvalley",
    title: "Rust製JavaScript/TypeScript Linterにおけるプラグイン実装の裏側",
    social: {
      github: "unvalley",
      link: "https://unvalley.me",
      twitter: "unvalley_",
    },
  },
];

const toggleTalkDay2List: TrackItem[] = [
  {
    title: "技術書をソフトウェア開発する - jsprimerの10年から学ぶ継続的メンテナンスの技術",
    speakerName: "azu",
    social: {
      twitter: "azu_re",
      github: "azu",
      link: "https://jsprimer.net/",
    },
  },
  {
    title: "機能的凝集の概念を用いて複数ロール、類似の機能を多く含むシステムのフロントエンドのコンポーネントを適切に分割する",
    speakerName: "IkedaNoritaka",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "複雑なフォームを継続的に開発していくための技術選定・設計・実装",
    speakerName: "izumin5210",
    social: {
      twitter: "izumin5210",
      github: "izumin5210",
      link: "",
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
    title: "TypeScript Language Service Plugin で CSS Modules の開発体験を改善する",
    speakerName: "mizdra",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "ts-morphを利用して編集可能なコード生成を実現する",
    speakerName: "yuta-ike",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "Type ChallengesにPRを出して新しい問題を追加した話",
    speakerName: "Kanon",
    social: {
      twitter: "ysknsid25",
      github: "ysknsid25",
      link: "https://dev.inorinrinrin.com/",
    },
  },
  {
    title: "Panda-CSS はどのように型安全にしているのか",
    speakerName: "加藤貴裕",
    social: {
      twitter: "doz13189",
      github: "doz13189",
      link: "",
    },
  },
  {
    title: "ProxyとTypeScriptのおいしい関係",
    speakerName: "Motoki Shakagori/ほとけ",
    social: {
      twitter: "schwmtl",
      github: "m-shaka",
      link: "https://linktr.ee/mshaka",
    },
  },
  {
    title: "型がない世界に生まれ落ちて 〜TypeScript運用進化の歴史〜",
    speakerName: "成原 聡一朗",
    social: {
      github: "feel_sooo_baaad",
      link: "https://suzuri.jp/VoodooRhythm",
      twitter: "",
    },
  },
];

const ascendTalkDay1List: TrackItem[] = [
  {
    title: "高度な型付け、どう教える？",
    speakerName: "progfay",
    social: {
      twitter: "progfay",
      github: "progfay",
      link: "",
    },
  },
  {
    title: "静的解析で実現したいことから逆算して学ぶTypeScript Compiler",
    speakerName: "Kazushi Konosu",
    social: {
      link: "",
      twitter: "kazushikonosu",
      github: "kazushisan",
    },
  },
  {
    title: "Language Serverと喋ろう",
    speakerName: "ぴざきゃっと",
    social: {
      twitter: "pizzacat83b",
      github: "pizzacat83",
      link: "https://pizzacat83.com",
    },
  },
  {
    title: "推論された型の移植性エラーTS2742に挑む",
    speakerName: "elecdeer",
    social: {
      twitter: "elecdeerdev",
      github: "elecdeer",
      link: "https://elecdeer.dev/",
    },
  },
  {
    title: "TSConfig Solution Style & subpath imports でファイル単位で型を切り替える",
    speakerName: "kotori",
    social: {
      twitter: "maminami_minami",
      github: "minami-minami",
      link: "",
    },
  },
  {
    title: "主要ライブラリの実例に学ぶ、TypeScriptで実現する型安全な座標定義",
    speakerName: "原口 公輔",
    social: {
      twitter: "Tirol_JPN",
      github: "TirolJPN",
      link: "https://tirol-jpn.com/pages/about",
    },
  },
  {
    title: "コンポーネントライブラリで実現する、アクセシビリティの正しい実装パターン",
    speakerName: "たじまん",
    social: {
      twitter: "schktjm",
      github: "schktjm",
      link: "https://bsky.app/profile/schktjm.bsky.social",
    },
  },
  {
    title: "AWS LambdaをTypeScriptで動かして分かった、Node.jsのTypeScriptサポートの利点と課題",
    speakerName: "Masaki Suzuki",
    social: {
      twitter: "makky12",
      github: "smt7174",
      link: "https://makky12.hatenablog.com/",
    },
  },
  {
    title: "fast-checkとneverthrowのPBT+Result型で堅牢なビジネスロジックを実現する",
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
      twitter: "HirokiOmote",
      github: "HirokiOmote",
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
    title: "型パズルを好きになるために、競プロを型システムだけで解いてみることにした",
    speakerName: "いまいまい",
    social: {
      twitter: "imaimai17468",
      github: "imaimai17468",
      link: "https://imaimai.tech/",
    },
  },
  {
    title: "タイプレベルリファクタリング奮闘記〜この「型パズル」は読めません！〜",
    speakerName: "Yugo Yagita",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
];

const ascendTalkDay2List: TrackItem[] = [
  {
    title: "フロントエンドがTypeScriptなら、バックエンドはPHPでもいいじゃない",
    speakerName: "富所 亮",
    social: {
      twitter: "hanhan1978",
      github: "hanhan1978",
      link: "https://blog.hanhans.net",
    },
  },
  {
    title: "Pragmatic Functional Programming in TypeScript",
    speakerName: "yasaichi",
    social: {
      twitter: "_yasaichi",
      github: "yasaichi",
      link: "https://blog.yasaichi.com/",
    },
  },
  {
    title: "型システムを活用した ESLint カスタムルール開発入門 〜固有ドメインにおけるコーディング規約を開発する〜",
    speakerName: "山梨 蓮",
    social: {
      twitter: "ren_yamanashi",
      github: "ren-yamanashi",
      link: "https://zenn.dev/yamaren",
    },
  },
  {
    title: "VueUse から学ぶ実践 TypeScript",
    speakerName: "ツノ",
    social: {
      github: "",
      link: "",
      twitter: "2nofa11",
    },
  },
  {
    title: "型推論の扉を開く―集合論と構造的型制約で理解する中級へのステップ",
    speakerName: "栃川晃佑",
    social: {
      github: "",
      link: "https://product.plex.co.jp/",
      twitter: "Web_TochiTech",
    },
  },
  {
    title: "TypeScript ASTとJSDocで実現するコードの自動削除",
    speakerName: "川野賢一",
    social: {
      twitter: "k_rf_",
      github: "k-rf",
      link: "",
    },
  },
  {
    title: "これは型破り？型安全？真実はいつもひとつ！（じゃないかもしれない）TypeScriptクイズ〜〜〜〜！！！！！",
    speakerName: "君田 祥一",
    social: {
      twitter: "kimi_koma1111",
      github: "kimitashoichi",
      link: "https://kimitashoichi.github.io/Profile",
    },
  },
  {
    title: "Lookback TypeScript ESM support and what should we do now.",
    speakerName: "左治木 隆成",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: `"良い"TSのコードを書く為のマインドセット`,
    speakerName: "Kei",
    social: {
      twitter: "kei_english_ca",
      github: "kei95",
      link: "https://www.youtube.com/@kei_NA",
    },
  },
  {
    title: "令和最新版TypeScriptでのnpmパッケージ開発",
    speakerName: "odan",
    social: {
      twitter: "odan3240",
      github: "odanado",
      link: "",
    },
  },
  {
    title: "コンパイルオプションで変わる型世界",
    speakerName: "池田敬祐",
    social: {
      twitter: "ike_keichan",
      github: "ike-keichan",
      link: "",
    },
  },
  {
    title: "TypeScriptのmoduleオプションを改めて整理する",
    speakerName: "おおいし (bicstone)",
    social: {
      twitter: "bicstone_me",
      github: "bicstone",
      link: "https://bicstone.me/",
    },
  },
  {
    title: "Project Referencesを活用した実行環境ごとのtsconfig最適化",
    speakerName: "板井俊樹",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
];

const leveragesTalkDay1List: TrackItem[] = [
  {
    title: "Full-Stack TypeScript x GraphQLで実現する漸進的アーキテクチャ",
    speakerName: "Sohei Takeno",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "SignalとObservable―新たなデータモデルを解きほぐす",
    speakerName: "lacolaco",
    social: {
      twitter: "laco2net",
      github: "lacolaco",
      link: "https://lacolaco.net",
    },
  },
  {
    title: "TSConfigからTypeScriptの世界を覗く",
    speakerName: "らいと",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "ハッカソンでTypeScriptを使った実体験",
    speakerName: "河村悠太",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "『Python→TypeScript』オンボーディング奮闘記",
    speakerName: "龍野 卓己",
    social: {
      twitter: "takumi_t_jp",
      github: "Exerea",
      link: "",
    },
  },
  {
    title: "転生したらTypeScriptのEnumだった件～型安全性とエコシステムの変化で挫けそうになっているんだが～",
    speakerName: "やまのく",
    social: {
      twitter: "yamanoku",
      github: "yamanoku",
      link: "https://yamanoku.net",
    },
  },
  {
    title: "URLPatternから始めるWebフレームワーク開発入門",
    speakerName: "ryuapp",
    social: {
      github: "ryuapp",
      link: "https://ryu.app",
      twitter: "",
    },
  },
  {
    title: "TypeScriptエンジニアがAndroid開発の世界に飛び込んだ話",
    speakerName: "yui_tang",
    social: {
      twitter: "yui_tang",
      github: "YUISAKAMOTO",
      link: "",
    },
  },
  {
    title: "Valibot Schema Driven UI - ノーコードWebサイトビルダーを実装してみよう！",
    speakerName: "宮城広隆(@MH4GF)",
    social: {
      twitter: "MH4GF",
      github: "mh4gf",
      link: "https://mh4gf.dev",
    },
  },
  {
    title: "Rust製JavaScript EngineのTypeScriptサポート",
    speakerName: "yossydev",
    social: {
      twitter: "yossydev",
      github: "yossydev",
      link: "https://yossy.dev/",
    },
  },
  {
    title: "TypeScript だけを書いて Tauri でデスクトップアプリを作ろう",
    speakerName: "小松 翔 (tris)",
    social: {
      twitter: "tris5572",
      github: "tris5572",
      link: "",
    },
  },
  {
    title: "型安全なDrag and Dropの設計を考える",
    speakerName: "yudppp",
    social: {
      twitter: "yudppp",
      github: "yudppp",
      link: "https://blog.yudppp.com/",
    },
  },
  {
    title: "GitHub ActionsをTypeScriptで作ろう！",
    speakerName: "じょーし（上司陽平）",
    social: {
      twitter: "paper2parasol",
      github: "paper2",
      link: "https://paper2.hatenablog.com/",
    },
  },
];

const leveragesTalkDay2List: TrackItem[] = [
  {
    title: "TypeScriptとVercel AI SDKで実現するLLMアプリケーション開発：フロントエンドからバックエンド、そしてChrome拡張まで",
    speakerName: "加瀬健太（Kesin11）",
    social: {
      twitter: "Kesin11",
      github: "Kesin11",
      link: "https://zenn.dev/kesin11",
    },
  },
  {
    title: "feature flag 自動お掃除のための TypeScript メタプログラミング",
    speakerName: "azrsh",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "Web Streams APIの基本と実践、TypeScriptでの活用法",
    speakerName: "tasshi",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "Result型、自前で書くか、ライブラリ使うか",
    speakerName: "majimaccho",
    social: {
      twitter: "majimaccho_",
      github: "majimaccho",
      link: "https://zenn.dev/mj2mkt",
    },
  },
  {
    title: "型付け力を強化するための Hoogle のすゝめ",
    speakerName: "TAKASE Kazuyuki (@Guvalif)",
    social: {
      twitter: "guvalif",
      github: "Guvalif",
      link: "https://www.wantedly.com/id/guvalif",
    },
  },
  {
    title: "React19で変化したuseReducerの型から学ぶTypeScriptの型推論",
    speakerName: "k8o",
    social: {
      twitter: "",
      github: "k35o",
      link: "https://k8o.me",
    },
  },
  {
    title: "クラサバ境界を失った現代 TypeScript コードベースに秩序をもたらしたい",
    speakerName: "Yo Iwamoto",
    social: {
      twitter: "yoiwamoto",
      github: "yo-iwamoto",
      link: "https://yo-iwamoto.me",
    },
  },
  {
    title: "君だけのオリジナル async / await を作ろう",
    speakerName: "susisu",
    social: {
      twitter: "susisu2413",
      github: "susisu",
      link: "https://susisu.hatenablog.com/",
    },
  },
  {
    title: "TypeScript製IaCツールのAWS CDKが様々な言語で実装できる理由 〜他言語変換の仕組み〜",
    speakerName: "k.goto",
    social: {
      twitter: "365_step_tech",
      github: "go-to-k",
      link: "https://aws.amazon.com/jp/developer/community/heroes/kenta-goto/",
    },
  },
  {
    title: "ts-morph実践：型を利用するcodemodのテクニック",
    speakerName: "ypresto",
    social: {
      github: "",
      link: "",
      twitter: "",
    },
  },
  {
    title: "declaration mergingの威力：ライブラリアップデート時の書き換え作業を90%短縮するテクニック",
    speakerName: "Yuma Takei",
    social: {
      twitter: "yutake27",
      github: "yutake27",
      link: "https://zenn.dev/yutake27",
    },
  },
  {
    title: "バリデーションライブラリ徹底比較",
    speakerName: "田中勇太",
    social: {
      twitter: "nayuta999999",
      github: "Yuta123456",
      link: "",
    },
  },
  {
    title: "Standard Schema: スキーマライブラリの統一規格とは何か",
    speakerName: "Nozomu Ikuta",
    social: {
      link: "",
      twitter: "nozomuikuta",
      github: "nozomuikuta",
    },
  },
];

export const timeTable = {
  trackOne: [...toggleTalkDay1List, ...toggleTalkDay2List],
  trackTwo: [...ascendTalkDay1List, ...ascendTalkDay2List],
  trackThree: [...leveragesTalkDay1List, ...leveragesTalkDay2List],
} as const satisfies TimeTable;
