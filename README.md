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

## reference

- [NodeCG](https://www.nodecg.dev/ja/)
