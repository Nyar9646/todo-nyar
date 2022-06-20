import * as React from "react";
import { Tab as TabLink, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import Form from "./Form";
import List from "./List";

const TodoTabs = styled(Tabs)`
  width: 56%;
  height: 88vh;
  overflow: hidden;
  padding: 1rem;
`
const TodoPanel = styled(TabPanel)`
  height: 80vh;
`

const Tab = ({todos, favoriteTodos, addTodo, delTodo, updTodoContent, switchFavorite, setTodos}): JSX.Element => {
  return (
    <TodoTabs>
      <TabList>
        <TabLink>all</TabLink>
        <TabLink>☆</TabLink>
      </TabList>
      <TodoPanel>
        <Form addTodo={addTodo} todosNum={todos.length} />
        <List todos={todos}
          delTodo={delTodo} switchFavorite={switchFavorite} updTodoContent={updTodoContent} setTodos={setTodos}
        />
      </TodoPanel>
      <TodoPanel>
        <Form addTodo={addTodo} todosNum={favoriteTodos.length} />
        <List todos={favoriteTodos}
          delTodo={delTodo} switchFavorite={switchFavorite} updTodoContent={updTodoContent} setTodos={setTodos}
        />
      </TodoPanel>
    </TodoTabs>
  )
}

export default Tab
