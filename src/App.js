/** top level component */

import "./css/reset.css"
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Form from "./components/todo/Form";
import List from "./components/todo/List";

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
      <Header />
      <Form addTodo={addTodo} />
      <List todos={todos} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
      <Footer />
    </>
  )
}

export default App
