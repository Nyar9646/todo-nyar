import React, {useState} from "react";

const Item = ({todo, delTodo, chkDoneAtTodo}) => {
  const isDoneStyle = {
    textDecoration: 'line-through',
    color: '#999',
  }
  const isNotDoneStyle = {
    textDecoration: 'none',
    color: '#000',
  }
  const contentStyle = todo.isDone ? isDoneStyle : isNotDoneStyle

  return (
    <li>
      <input type='checkbox' onChange={() => chkDoneAtTodo(todo.id)} checked={todo.isDone} />
      <span style={contentStyle}>{todo.content}</span>
      <button onClick={e => delTodo(todo.id)}>delete</button>
    </li>
  )
}

export default Item
