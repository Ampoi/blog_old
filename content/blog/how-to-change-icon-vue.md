---
title: "VueCLIでfaviconを変える方法"
emoji: "🙂"
type: "tech"
topics: ["vue", "vue3", "icon", "vuecli", "favicon"]
published: true
---

最近個人開発で作っているウェブアプリのfavicon(ブラウザで上に出るアイコン)を変えようとしたのですが反映されずに相当つまづいたので備忘録としてこの記事を書きました。

## Faviconについて

Vue CLIではFaviconはすべて/public/img/iconsのところに入っており、このiconsフォルダを置き換えることによってアイコンを変えることができます。これらのアイコンは端末に合わせてvue側で入れ替えられるので、画質を落とすことなく複数デバイスにあったfaviconを表示できるようになっています。

![](https://storage.googleapis.com/zenn-user-upload/b985cbdc84b3-20220318.png) 

## どうやって入れ替えるの？？？ 

[このジェネレーター](https://ao-system.net/favicongenerator/)をつかってiconsフォルダ内の画像を一括生成します。
(生成した際に、ブラウザ用の```favicon-16x16.png```などの画像の名前が```icon-16x16.png```になってしまうのでこれらの名前を変更する必要があります。)
