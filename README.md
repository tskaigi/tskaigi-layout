# TSKaigi Streaming Layout

## setup

```sh
mkdir nodecg
npx --package=nodecg-cli@latest -- nodecg setup
```

- npmのパッケージインストールが進まない場合は止めて別途`npm ci`してください

```sh
cd bundles
git clone https://github.com/tskaigi/tskaigi-layout.git
# or
gh repo clone tskaigi/tskaigi-layout
```

```sh
cd tskaigi-layout
npm ci
npm run dev
```

## reference

- [NodeCG](https://www.nodecg.dev/ja/)
