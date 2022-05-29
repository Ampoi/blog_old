---
title: "Webアプリにアイコンを入れたい#2 (Bootstrap Icons)"
emoji: "🛠️"
type: "tech"
topics: ["bootstrap", "css", "html", "vue", "web"]
published: true
---
こんにちはVueJSのすごさを知りました柴田クロノスケです。
今回はWebアプリにアイコンを入れよう#2ということで前回の記事に続き(?)Webアプリにアイコンを入れる方法を紹介していきたいと思います。
前回の記事ではGoogleマテリアルアイコンの入れ方を紹介しましたが、今回はBootstrap Iconsというものの入れ方を紹介します。
## Bootstrap Iconsとは???????
Bootstrap Iconsはフリーで1300種類以上のアイコンを保有するアイコンライブラリです
見た目はGoogle Material Iconsよりもすっきりとした見た目でiOSなどで使われているSFsymbolsに少し似た感じとなっています。
![apapa](https://icons.getbootstrap.jp/assets/img/icons-hero@2x.png)
## 使ってみよう!!!
Google Material Iconsに比べて導入はとても簡単です
使い方は何種類かありますが、個人的に一番使いやすいと思うアイコンフォントとして導入する手順を紹介します。
1. 以下のコードをCSSに張り付ける!
    ```css
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css");
    ``` 
    VueJSで使う場合も```<style></style>```の中に張り付ければ使えます。
    >バージョンによってはこのコードが古くて使えない場合もあります。 https://icons.getbootstrap.jp/#インストール から最新のコードを取得してください。 

2. https://icons.getbootstrap.jp から使いたいアイコンを探す!
3. 使いたいアイコンを選択して、"アイコンフォント"の下にあるコードをコピペする!
    例えば: 
    ```html
    <i class="bi bi-arrow-up-left"></i>
    ```
4. 完成!!!
    とても短い記事でしたが、こんな感じでBootstrapのアイコンをWebアプリに入れることができます。アイコンを入れると見やすいWebアプリになるのでぜひ皆さんも使ってみてください!!!