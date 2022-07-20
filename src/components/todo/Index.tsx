import * as React from "react";
import { useState, useEffect } from "react"
import { nanoid } from "nanoid";
import { arrayMoveImmutable } from "array-move";

import { STORAGE_KEY } from "../../utils/constants";
import { TodoObj } from "../../utils/interfaces";
import { canNotUseLocalStorage, toDataArray, setLocaoStorageWithObject } from "../../utils/useLocalStorage";
import Tab from "./Tab";

const Todo = (): JSX.Element => {
  if (canNotUseLocalStorage) {
    alert('当機能は、WEB Strage である、localStorage の機能を用いています。この機能が有効であることを確認してください')
  }

  const [todos, setTodos] = useState(toDataArray(STORAGE_KEY) || [])

  const getFavoriteTodos = ():[TodoObj] => todos.filter((todos: TodoObj) => todos.isFavorite === true)
  let favoriteTodos: [TodoObj] = getFavoriteTodos()

  const addTodo = (newContent: string): void => {
    const orderNum: number = todos.length > 0 ? Math.max(...todos.map((todo: TodoObj) => todo.order)) + 1 : 1

    setTodos([
      ...todos,
      {
        id: nanoid(),
        content: newContent,
        isFavorite: false,
        order: orderNum,
      },
    ])
  }

  const delTodo = (delId: string): void => {
    const deleteOrder: number = todos.filter((todo: TodoObj) => todo.id === delId)[0].order
    const deletedTodos = todos.filter((todo: TodoObj) => todo.id !== delId)

    const organizedTodos = deletedTodos.map((todo: TodoObj) => {
      if (todo.order > deleteOrder) {
        todo.order = todo.order - 1
      }
      return todo
    })

    setTodos(organizedTodos)
  }

  const updTodoContent = (updId: string, updContent: string): void => {
    const updatedTodos = todos.map((todo: TodoObj) => {
      if (todo.id === updId) {
        todo.content = updContent
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const updTodoOrder = (startIndex: number, endIndex: number): void => {
    const orderedTodos = arrayMoveImmutable(todos, startIndex, endIndex)
      .map((todo: TodoObj, index: number): TodoObj => {
        return {...todo, order: index + 1}
    })

    setTodos(orderedTodos)
  }

  const updTodoFavorite = (chkId: string): void => {
    const updTodos = todos.map((todo: TodoObj) => {
      if (todo.id === chkId) {
        todo.isFavorite = !todo.isFavorite
      }
      return todo
    })

    setTodos([...updTodos])
  }

  useEffect(() => {
    favoriteTodos = getFavoriteTodos()
    setLocaoStorageWithObject(STORAGE_KEY, todos)
    console.log(todos)
  }, [todos])

  return (
    <Tab
      todos={todos} favoriteTodos={favoriteTodos}
      addTodo={addTodo}
      delTodo={delTodo}
      updTodoContent={updTodoContent}
      updTodoFavorite={updTodoFavorite}
      updTodoOrder={updTodoOrder}
    />
  )
}

export default Todo
