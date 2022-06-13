# todo-nyar
<!-- https://nyar9646.github.io/todo-nyar/ -->

## Consepts
<!-- 直近で、__自分が何をしたらいいかわからない方向け__ の Todo 機能。 -->
シンプルなtodoリスト。
掴んで並び順を移動可能。

### function
- Todo

## Recommendation
- Chrome97

## Code
- ES2015

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
</details>

## Todo
- .env 対応
  - StrageKey
- FontAwesome
- レスポンシブ
