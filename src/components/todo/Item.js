import React from "react";
import styled from "styled-components";

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border: 1px solid #999;
  border-radius: 24px;
  background-color: #f1ffff;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`
const DeleteButton = styled.button`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #f1ffff;
  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px; /* 棒の幅（太さ） */
    height: 30px; /* 棒の高さ */
    background: #999;
  };
  &:before {
    transform: translate(-50%, -50%) rotate(45deg)
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg)
  }
`

const isDoneStyle = {
  textDecoration: 'line-through',
  color: '#999',
}
const isNotDoneStyle = {
  textDecoration: 'none',
  color: '#000',
}

const Item = ({todo, delTodo, chkDoneAtTodo}) => {
  const contentStyle = todo.isDone ? isDoneStyle : isNotDoneStyle

  return (
    <TodoItem>
      <span>
        <input type='checkbox' onChange={() => chkDoneAtTodo(todo.id)} checked={todo.isDone} />
        <span style={contentStyle}>{todo.content}</span>
      </span>
      <DeleteButton onClick={e => delTodo(todo.id)}/>
    </TodoItem>
  )
}

export default Item
