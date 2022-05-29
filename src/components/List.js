import React from "react";
import Item from "./Item";

const List = ({todos, delTodo, chkDoneAtTodo}) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <Item key={todo.id} todo={todo} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
        ))
      }
    </ul>
  )
}

export default List
