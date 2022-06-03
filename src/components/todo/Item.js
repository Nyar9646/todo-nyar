import React from "react";
import styled from "styled-components";

const TodoItem = styled.li`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  border: 1px solid #999;
  border-radius: 24px;
  background-color: #f1ffff;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: lightblue;
  }
`
const TodoLabel = styled.span`
  display: flex;
  width: 90%;
  align-items: center;
  cursor: grab;
`
const TodoCheck = styled.input`
`
const getContentDocoration = isDone => {
  if (isDone) {
    return `
      text-decoration: line-through;
      color: #999;
    `
  } else {
    return `
      text-decoration: none;
      color: #000;
    `
  }
}
const TodoContent = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({isDone}) => getContentDocoration(isDone)}
`
const DeleteButton = styled.button`
  display: block;
  position: relative;
  background-color: #f1ffff;
  cursor: pointer;
  margin-right: 1rem;
  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 3rem;
    background: #999;
  };
  &:before {
    transform: translate(-50%, -50%) rotate(45deg)
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg)
  }
`

const Item = ({todo, delTodo, chkDoneAtTodo}) => {
  return (
    <TodoItem>
      <TodoLabel>
        <TodoCheck type='checkbox' onChange={() => chkDoneAtTodo(todo.id)} checked={todo.isDone} />
        <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
      </TodoLabel>
      <DeleteButton onClick={e => delTodo(todo.id)}/>
    </TodoItem>
  )
}

export default Item
