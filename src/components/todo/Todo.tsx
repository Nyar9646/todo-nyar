import * as React from "react";
import { useState } from "react"
import { nanoid } from "nanoid";
import styled from "styled-components";
import Form from "./Form";
import List from "./List";

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
  const [todos, setTodos] = useState([])

  const addTodo = (newContent: String) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        content: newContent,
        isDone: false,
      },
    ])
  }

  const delTodo = (delId: String) => {
    setTodos(todos.filter(todo => todo.id !== delId))
  }

  const chkDoneAtTodo = (chkId: String) => {
    const updTodos = todos.map(todo => {
      if (todo.id === chkId) {
        todo.isDone = !todo.isDone
      }

      return todo
    })

    setTodos([...updTodos])
  }

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
