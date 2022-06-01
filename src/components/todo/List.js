import React from "react";
import styled from "styled-components";
import Item from "./Item";

const TodoList = styled.ul`
  margin-right: 0.5rem;
`

const List = ({todos, delTodo, chkDoneAtTodo}) => {
  return (
    <TodoList>
      {
        todos.map(todo => (
          <Item key={todo.id} todo={todo} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
        ))
      }
    </TodoList>
  )
}

export default List
