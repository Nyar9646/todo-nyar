# todo-nyar
https://nyar9646.github.io/todo-nyar/

## Consepts
画像を使用しない、シンプルなtodoリスト

## function
- Todo
  1. todo の登録・削除
  2. お気に入り
  3. タブで、全データ / お気に入りのみ で切替え
  3. todo リストの並び替え

### Recommendation
- Chrome97

### Code
- ES2015

<!-- ### Way made
1年勉強した内容を盛り込みたかった -->

---

## Environmente
### strage
- Web Storage localStorage
  - ページを閉じても再度アクセスした場合はデータを使って復元
    - Chrome : 5MB

### store
- React hooks

### a little feature
- styled-component
- typescript
- webpack-dev-server
- react-beautifl-dnd
- reset CSS

<details>
<summary>installs</summary>
- $ npx create-react-app todo-nyar
- $ yarn add webpack webpack-cli
- $ yarn add typescript
- $ yarn add ts-loader @types/react @types/react-dom
- $ yarn add webpack-dev-server
- $ yarn add nanoid
- $ yarn add styled-components @material-ui/core
- $ yarn add array-move react-beautiful-dnd @types/react-beautiful-dnd
- $ yarn add react-tabs
</details>

### Todo
- リストから変更
- 入力制御
- バケツリレー排除
- スクロールがしにくい。スクロールがあるのかわからない
- リストのハンバーガーボタンの太さがアイテムで異なる
- .env 対応
  - StrageKey
  - constants
- レスポンシブ確認

<details>
<summary>苦労した点</summary>
- リストドラッグの機能を、当初は react-draggable-dnd を使用しようとしたが、うまくいかず、調整に時間がかかりました。
</details>
