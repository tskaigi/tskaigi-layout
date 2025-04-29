# TSKaigi Streaming Layout

## setup

### NodeCGのインストール

BundleファイルはNodeCGの配下に置かないといけないため先にNodeCGをインストールします。
すでにNodeCGのインストールが済んでいる環境ではスキップしてください。

```sh
mkdir nodecg
npx --package=nodecg-cli@latest -- nodecg setup
```

- npmのパッケージインストールが進まない場合は止めて別途`npm ci`してください

### Bundleのclone

Bundle用のディレクトリに移動してこのリポジトリをcloneします。

```sh
cd bundles
git clone https://github.com/tskaigi/tskaigi-layout.git
# or
gh repo clone tskaigi/tskaigi-layout
```

### 開発環境の立ち上げ

cloneしたBundleのディレクトリに移動してパッケージをインストール後開発環境を立ち上げます。

```sh
cd tskaigi-layout
npm ci
npm run dev
```

`SqliteError: no such table: replicant`のエラーが発生した場合は以下でtskaigi-layoutのbundleできた。

```shell
(tskaigi-layoutディレクトリ) npm run dev:view
```

## 使用方法

アプリケーションをビルド後、NodeCGサーバーを立ち上げることでアプリケーションを実行できます。

```sh
(nodecgディレクトリ) npm start
```

実際の使用方法については[アプリケーション内部のマニュアル](https://github.com/tskaigi/tskaigi-layout/blob/main/src/browser/dashboard/data/manual/index.md)を参照してください。

## reference

- [NodeCG](https://www.nodecg.dev/ja/)
