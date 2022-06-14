import * as React from "react";
import { useState, useEffect } from "react"
import { nanoid } from "nanoid";
import styled from "styled-components";

import { TodoObj } from "../../utils/interfaces";
import {
  canNotUseLocalStorage,
  toDataArray,
  setLocaoStorageWithObject
} from "../../utils/useLocalStorage";
import Form from "./Form";
import List from "./List";

const StrageKey: string = 'strage/todos'

const TodoSection = styled.section`
  height: 88vh;
`
const TodoTitle = styled.h2`
`
const TodoWrapper = styled.div`
  width: 50%;
  height: 80vh;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(-45deg, #283c86, #06beb6);
  padding: 0 1rem 0 2rem;
`

const Todo: React.FC = (): JSX.Element => {
  if (canNotUseLocalStorage) {
    alert('当機能は、WEB Strage である、localStorage の機能を用いています。この機能が有効であることを確認してください')
  }

  const [todos, setTodos] = useState(toDataArray(StrageKey) || [])

  const addTodo = (newContent: string): void => {
    const orderNum: number = todos.length > 0
      ? Math.max(...todos.map((todo: TodoObj) => todo.order)) + 1 : 1

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
    const afterTodos = todos.filter((todo: TodoObj) => todo.id !== delId)

    const organizedTodos = afterTodos.map((todo: TodoObj) => {
      if (todo.order > deleteOrder) {
        todo.order = todo.order - 1
      }
      return todo
    })

    setTodos(organizedTodos)
  }

  const switchFavorite = (chkId: string): void => {
    const updTodos = todos.map((todo: TodoObj) => {
      if (todo.id === chkId) {
        todo.isFavorite = !todo.isFavorite
      }
      return todo
    })

    setTodos([...updTodos])
  }

  useEffect(() => {
    setLocaoStorageWithObject(StrageKey, todos)
    console.log(todos)
  }, [todos])

  return (
    <TodoSection>
      <TodoTitle>何しよう？</TodoTitle>
      <TodoWrapper>
        <Form addTodo={addTodo} />
        <List todos={todos} delTodo={delTodo} switchFavorite={switchFavorite} setTodos={setTodos} />
      </TodoWrapper>
    </TodoSection>
  )
}

export default Todo
