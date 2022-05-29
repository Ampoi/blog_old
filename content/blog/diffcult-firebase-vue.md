---
title: "VueCLIにFirebaseを追加するときに困ったこと一覧"
emoji: "🧐"
type: "tech"
topics: ["firebase", "vue", "powershell"]
published: true
---
こんにちは柴田クロノスケです。
今回はVueJSにFirebaseを追加する際にいろいろつまずいたので覚え書き程度にQ&A形式で紹介していきたいと思います。

## 1.いやVue CLI動かないじゃん

```zsh
vue create hogehoge
```
と入力してEnterを押すと実行ポリシーの関係でVueコマンドが実行できない ↓
```cmd
Set-ExecutionPolicy RemoteSigned -Scope Process
``` 
で直る!!!
参考:https://docs.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2
## 2.Firebase追加方法わからん;o;
意外といろんなサイト見てもVueCLIへの追加方法が書いていません
⇒Firebase公式に載っているコードでいいっぽい
```zsh
 vue create hogehoge cd hogehoge npm install --save firebase
 ```
 で普通に使えます。 
 ## 2(.2).Firebaseコードどこで実行するの;o;
 これもあんまり説明されてません(わからないの僕だけ?)
 ⇒App.vueとかrouter使ってるならviews/以下のファイルのscriptタグの中に書き込む (export defaultの外側)
 ⇒Firebase v9になってもimportの方法は変わってない!!!(公式ドキュメントそのまま)
 ## 2(.2.1).FirebaseConfigをどこに設置するの;o;
 App.vue(export defaultの外側)に追加します。
 Vue Routerを使っている場合でもApp.vueに追加するだけで動くようになります。