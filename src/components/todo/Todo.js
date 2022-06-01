import React, {useState} from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Form from "./Form";
import List from "./List";

const TodoSection = styled.section`
  height: 720px;
`
const TodoTitle = styled.h2`
`
const TodoWrapper = styled.div`
  width: 50%;
  height: 90%;
  overflow: scroll;
  border-radius: 8px;
  background: linear-gradient(-45deg, #283c86, #06beb6);
`

const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = newContent => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        content: newContent,
        isDone: false,
      },
    ])
  }

  const delTodo = delId => {
    setTodos(todos.filter(todo => todo.id !== delId))
  }

  const chkDoneAtTodo = chkId => {
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
      <TodoTitle>Make my todos ...</TodoTitle>
      <TodoWrapper>
        <Form addTodo={addTodo} />
        <List todos={todos} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
      </TodoWrapper>
    </TodoSection>
  )
}

export default Todo
