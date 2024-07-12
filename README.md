# 最終レポート チーム 18

## Web ページの概要

部活の紹介と、部室予約システムを提供する Web ページ。

以下、その他の依存リポジトリにつてのリンクを示す。

動的サイト フロントエンドソースコード: [https://github.com/calloc134/reserv-frontend-lab](https://github.com/calloc134/reserv-frontend-lab)  
動的サイト バックエンドソースコード: [https://github.com/calloc134/reserv-backend-lab](https://github.com/calloc134/reserv-backend-lab)

## サイトマップ

Under construction

## Web ページの外観

## 作業分担

calloc134:

- 環境構築(devcontainer)
- 静的サイト(トップページ)の作成(HTML, TailwindCSS)
- CD パイプラインの構築(Github Actions)
- Netlify へのデプロイ
- SQL スキーマ記述(Neon Database)
- バックエンドサーバのセットアップ(Cloudflare Workers)
- 認証サービスの導入(Clerk)
- 予約システムバックエンド構築(Hono)
- 予約システムフロントエンド構築(React)
- 予約システムデザイン(TailwindCSS)

## アピールポイント

- 動的な部室予約システムの構築
  - バックエンドでは SQL を記述してデータを永続化しており、またビジネスロジックとして以下の制約を設けている
    - 一週間以内に自分の予約があれば予約できない
    - すでに予約がある場合は予約不可
    - 予約の取り消しは 3 日前まで
  - ログインはアカウント作成だけでなく、Google アカウントでのログインも可能(Clerk の機能)
    - Google アカウント
    - LINE アカウント
    - Discord アカウント
- 開発体験の向上
  - DevContainer を利用した開発環境の構築で、他メンバの環境構築の手間を省くことができた
  - prettier を導入し、フォーマットの統一を図った
  - tailwindcss の導入で、スタイリングの効率化
  - Vite を利用したホットリロードで、開発効率を向上させた

## まとめ

## 静的サイト 実行方法

devcontainer で開発環境を整えてあるため、Github Codespaces から開発を行うことができる。
コンテナにアタッチした後、以下のコマンドを実行することで、Tailwind CSS で CSS のコンパイルをしながら HTML を確認するサーバを立ち上げることができる。

```bash
pnpm tailwindcss -i css/input.css -o css/style.css --watch & pnpm vite
```

## 利用技術

以下、静的サイト部分の技術について記載。

### pnpm

JavaScript/TypeScript におけるパッケージマネージャである。  
npm や yarn と比べて高速であることが特徴である。

### Tailwind CSS

CSS フレームワークであり、クラスベースでスタイリングを行うことができる。  
CSS の記述を減らすことができるため、効率的にスタイリングを行うことができるが、style 属性でのスタイリングのような記述となるため、適切な利用が推奨される。

### Vite

開発環境を提供するビルドツールであり、フロントエンド開発で頻繁に利用される。  
今回はホットリロード機能を利用するために採用した。  
これにより、ファイルの変更を検知してコンテンツを再読み込みするだけでなく、ブラウザに更新通知を送信し、接続しているクライアントに自動的に再読み込みを行わせることができる。

以下、動的サイト部分の技術について記載。

### Netlify

静的サイトのホスティングを行うために採用した。

### Github Actions

CI/CD ツール。  
html がプッシュされた際、Netlify にデプロイするために採用している。  
動的サイトのリポジトリの内容をビルドして同梱させる処理も行っている。

### Clerk

認証サービス。IDaaS として機能する。

### React

予約管理システムのフロントエンドを構築するために採用した。

### Tanstack Router

予約管理システムのルーティング部分を構築するために採用した。

### Tanstack Query

データ取得を行うためのライブラリ。

### react-hot-toast

通知を表示するためのライブラリ。

### shadcn/ui

UI コンポーネントを提供するライブラリ。

### Hono

TypeScript で動作するサーバサイドフレームワーク。  
予約管理システムのバックエンドを構築するために採用した。

### Cloudflare Workers

Cloudflare の提供するサーバレスプラットフォーム。  
予約管理システムのバックエンドをホスティングするために採用した。

### Neon Database

サーバレスデータベースを提供する SaaS。
PostgreSQL 互換の SQL データベースを提供する。

### SafeQL

SQL クエリを発行し、TypeScript の型とマップするライブラリ。

### DevContainer

開発環境をコンテナ化するための機能。  
今回はこれを利用して開発環境を構築した。
