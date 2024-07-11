# 最終レポート チーム 18

## Web ページの概要

部活の紹介と、部室予約システムを提供する Web ページ。

## サイトマップ

Under construction

## Web ページの外観

## 作業分担

## アピールポイント

## まとめ

## 静的サイト 実行方法

devcontainer で開発環境を整えてあるため、Github Codespaces から開発を行うことができる。
コンテナにアタッチした後、以下のコマンドを実行することで、Tailwind CSS で CSS のコンパイルをしながら HTML を確認するサーバを立ち上げることができる。

```bash
pnpm tailwindcss -i src/input.css -o src/style.css & pnpm vite
```

利用技術について

### pnpm

JavaScript/TypeScript におけるパッケージマネージャである。
npm や yarn と比べて高速であることが特徴である。

### Tailwind CSS

CSS フレームワークであり、クラスベースでスタイリングを行うことができる。
CSS の記述を減らすことができるため、効率的にスタイリングを行うことができるが、style 属性でのスタイリングのような記述となるため、適切な利用が推奨される。

### Vite

開発環境を提供するビルドツールであり、フロントエンド開発で頻繁に利用される。
今回はホットリロード機能を利用するために採用した。
