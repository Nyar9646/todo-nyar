export type TodoObj = {
  id: string,
  content: string,
  isFavorite: boolean,
  order: number,
}

export type TodoDataContextObj = {
  todos: [TodoObj],
  favoriteTodos: [TodoObj],
}
