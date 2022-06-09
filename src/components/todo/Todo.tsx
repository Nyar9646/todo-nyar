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

const StrageKey = 'strage/todos'

const TodoSection = styled.section`
  height: 72rem;
`
const TodoTitle = styled.h2`
`
const TodoWrapper = styled.div`
  width: 50%;
  height: 90%;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(-45deg, #283c86, #06beb6);
`

const Todo: React.FC = () => {
  if (canNotUseLocalStorage) {
    alert('当機能は、WEB Strage である、localStorage の機能を用いています。この機能が有効であることを確認してください')
  }

  const [todos, setTodos] = useState(toDataArray(StrageKey) || [])

  const addTodo = (newContent: string) => {
    const orderNum = todos.length > 0 ? Math.max(...todos.map((todo: TodoObj) => todo.order)) + 1 : 1

    setTodos([
      ...todos,
      {
        id: nanoid(),
        content: newContent,
        isDone: false,
        order: orderNum,
      },
    ])
  }

  const delTodo = (delId: string) => {
    setTodos(todos.filter((todo: TodoObj) => todo.id !== delId))
  }

  const chkDoneAtTodo = (chkId: string) => {
    const updTodos = todos.map((todo: TodoObj) => {
      if (todo.id === chkId) {
        todo.isDone = !todo.isDone
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
        <List todos={todos} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
      </TodoWrapper>
    </TodoSection>
  )
}

export default Todo
