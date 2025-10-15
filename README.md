# TSKaigi Streaming Layout

## setup （NodeCG のインストールから自分でする場合）

### NodeCGのインストール

BundleファイルはNodeCGの配下に置かないといけないため先にNodeCGをインストールします。
すでにNodeCGのインストールが済んでいる環境ではスキップしてください。

```sh
mkdir nodecg
cd nodecg
npx nodecg@latest setup
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
npm run dev:view
```

NodeCG 本体も別途立ち上げます

```sh
(nodecgディレクトリ) node index.js
```

上記2つを立ち上げると http://localhost:9090 でダッシュボードを表示できます。

## setup (Docker Compose で起動する場合)

### clone

このリポジトリをcloneします。

```sh
git clone https://github.com/tskaigi/tskaigi-layout.git
# or
gh repo clone tskaigi/tskaigi-layout
```

### 開発環境の立ち上げ

cloneしたディレクトリに移動してパッケージをインストール後開発環境を立ち上げます。

```sh
cd tskaigi-layout
npm run dev:view
```

NodeCG 本体はDocker Compose で立ち上げます

```sh
docker compose up -d
```

上記2つを立ち上げると http://localhost:9090 でダッシュボードを表示できます。

## 使用方法

アプリケーションをビルド後、NodeCGサーバーを立ち上げることでアプリケーションを実行できます。

```sh
(nodecgディレクトリ) npm start
```

実際の使用方法については[アプリケーション内部のマニュアル](https://github.com/tskaigi/tskaigi-layout/blob/main/src/browser/dashboard/data/manual/index.md)を参照してください。

## reference

- [NodeCG](https://www.nodecg.dev/ja/)
