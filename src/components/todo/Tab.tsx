import * as React from "react";
import { Tab as TabLink, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import { TODO_AREA_HEIGHT, TODO_AREA_WIDTH } from "../../utils/constants";
import Form from "./Form";
import List from "./List";

const TodoTabs = styled(Tabs)`
  width: ${TODO_AREA_WIDTH};
  height: ${TODO_AREA_HEIGHT};
  overflow: hidden;
  padding: 1rem;
`

const Tab = ({
  todos, favoriteTodos, addTodo, delTodo, updTodoContent, updTodoFavorite, updTodoOrder
}): JSX.Element => (
  <TodoTabs>
    <TabList>
      <TabLink>all</TabLink>
      <TabLink>☆</TabLink>
    </TabList>
    <TabPanel>
      <Form addTodo={addTodo} todosNum={todos.length} />
      <List
        todos={todos}
        delTodo={delTodo}
        updTodoFavorite={updTodoFavorite}
        updTodoContent={updTodoContent}
        updTodoOrder={updTodoOrder}
      />
    </TabPanel>
    <TabPanel>
      <Form addTodo={addTodo} todosNum={favoriteTodos.length} />
      <List
        todos={favoriteTodos}
        delTodo={delTodo}
        updTodoFavorite={updTodoFavorite}
        updTodoContent={updTodoContent}
        updTodoOrder={updTodoOrder}
      />
    </TabPanel>
  </TodoTabs>
)

export default Tab
