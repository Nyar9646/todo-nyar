/** top level component */

import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
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
    <>
      <h1>todo-nyar</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
    </>
  )
}

export default App
