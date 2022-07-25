import * as React from "react";
import { useContext } from "react";
import { Tab as TabLink, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import { TODO_AREA_HEIGHT, TODO_AREA_WIDTH } from "../../utils/constants";
import { TodoDataContext } from "./Index"
import Form from "./Form";
import List from "./List";

const TodoTabs = styled(Tabs)`
  width: ${TODO_AREA_WIDTH};
  height: ${TODO_AREA_HEIGHT};
  overflow: hidden;
  padding: 1rem;
`

const Tab = ({
  addTodo, delTodo, updTodoContent, updTodoFavorite, updTodoOrder
}): JSX.Element => {
  const todoData = useContext(TodoDataContext)

  return (
    <TodoTabs>
      <TabList>
        <TabLink>all</TabLink>
        <TabLink>☆</TabLink>
      </TabList>
      <TabPanel>
        <Form addTodo={addTodo} todosNum={todoData.todos.length} />
        <List
          todos={todoData.todos}
          delTodo={delTodo}
          updTodoFavorite={updTodoFavorite}
          updTodoContent={updTodoContent}
          updTodoOrder={updTodoOrder}
        />
      </TabPanel>
      <TabPanel>
        <Form addTodo={addTodo} todosNum={todoData.favoriteTodos.length} />
        <List
          todos={todoData.favoriteTodos}
          delTodo={delTodo}
          updTodoFavorite={updTodoFavorite}
          updTodoContent={updTodoContent}
          updTodoOrder={updTodoOrder}
        />
      </TabPanel>
    </TodoTabs>
  )
}

export default Tab
