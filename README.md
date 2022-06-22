# todo-nyar
https://nyar9646.github.io/todo-nyar/

## Consepts
画像を使用しない、シンプルなtodoリスト

## function
- Todo
  - todo の登録・変更・削除
  - お気に入り
  - タブで、全データ / お気に入りのみ の切替
  - todo リストの並び替え

### Recommendation
- Chrome97

### Code
- ES2015

### Way made
1年勉強した内容を盛り込みたかった
  todoリストは基本中の基本だが、それを可能な限りカスタマイズしてみたかった

---

## Environmente
### strage
- Web Storage localStorage
  - ページを閉じても再度アクセスした場合はデータを使って復元
    - Chrome : 5MB

### store
- React hooks

### a little feature
- styled-component : react上でcssを記述可能にする
- typescript : 型つけ
- webpack-dev-server : server側の自動更新
- react-beautifl-dnd : リストドラッグ
- reset CSS

<details>
<summary>installs</summary>
$ npx create-react-app todo-nyar
  $ yarn add webpack webpack-cli
  $ yarn add typescript
  $ yarn add ts-loader @types/react @types/react-dom
  $ yarn add webpack-dev-server
  $ yarn add nanoid
  $ yarn add styled-components @material-ui/core
  $ yarn add array-move react-beautiful-dnd @types/react-beautiful-dnd
  $ yarn add react-tabs

</details>

### Todo
- git pages 公開
- 入力制御
- バケツリレー排除
- スクロールがしにくい。スクロールがあるのかわからない
- リストのハンバーガーボタンの太さがアイテムで異なる
- リストのハンバーガーボタンからドラッグ可能にする
- .env 対応
  - StrageKey
  - constants
- レスポンシブ確認

<details>
<summary>苦労した点</summary>
- リストドラッグの機能に、当初は react-draggable-dnd を使おうとしたが、typescript を反映する際にうまくいかず、調査に時間がかかった
</details>
