import * as React from "react";
import { useState, useEffect } from "react"
import { Tab as TabLink, Tabs, TabList, TabPanel } from "react-tabs";
import { nanoid } from "nanoid";
import styled from "styled-components";

import { TodoObj } from "../../utils/interfaces";
import { canNotUseLocalStorage, toDataArray, setLocaoStorageWithObject } from "../../utils/useLocalStorage";
import Form from "./Form";
import List from "./List";

const StrageKey: string = 'strage/todos'

const TodoTabs = styled(Tabs)`
  width: 50%;
  height: 88vh;
  overflow: hidden;
  padding: 1rem;
`
const TodoWrapper = styled.div`
  height: 80vh;
`

const Tab: React.FC = (): JSX.Element => {
  if (canNotUseLocalStorage) {
    alert('当機能は、WEB Strage である、localStorage の機能を用いています。この機能が有効であることを確認してください')
  }

  const [todos, setTodos] = useState(toDataArray(StrageKey) || [])

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
    favoriteTodos = getFavoriteTodos()
    setLocaoStorageWithObject(StrageKey, todos)
    console.log(todos)
  }, [todos])

  return (
    <TodoTabs>
      <TabList>
        <TabLink>all</TabLink>
        <TabLink>☆</TabLink>
      </TabList>
      <TabPanel>
        <TodoWrapper>
          <Form addTodo={addTodo} todosNum={todos.length} />
          <List todos={todos} delTodo={delTodo} switchFavorite={switchFavorite} setTodos={setTodos} />
        </TodoWrapper>
      </TabPanel>
      <TabPanel>
        <TodoWrapper>
          <Form addTodo={addTodo} todosNum={favoriteTodos.length} />
          <List todos={favoriteTodos} delTodo={delTodo} switchFavorite={switchFavorite} setTodos={setTodos} />
        </TodoWrapper>
      </TabPanel>
    </TodoTabs>
  )
}

export default Tab
