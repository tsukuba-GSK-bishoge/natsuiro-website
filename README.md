## 環境構築

### 前提条件

以下がインストールされていることを確認してください。

- Node.js
- npm
- git

### 手順

以下の手順に従って、開発環境を構築してください。

1. レポジトリをcloneして、レポジトリのディレクトリに移動

```sh
git clone https://github.com/tsukuba-GSK-bishoge/natsuiro-website.git
cd natsuiro-website
```

2. 以下のコマンドをレポジトリのルートで実行

```sh
npm i && npm exec husky-init -y &&  npm exec husky set .husky/pre-commit "npm exec lint-staged"
```

3. 以下のコマンドを実行して、開発サーバーを起動

```sh
npm run dev
```
