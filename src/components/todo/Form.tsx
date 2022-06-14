import * as React from "react";
import { useState } from "react"
import styled from "styled-components";

const TextForm = styled.input`
  width: 30vw;
  height: 4rem;
  padding-left: 1rem;
  margin: 2rem 0 2rem 0;
  border: 1px solid #999;
`

const Form = ({addTodo}): JSX.Element => {
  const [val, setVal] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    if(val === '') {
      return
    }

    addTodo(val)
    setVal('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextForm id='inputContent' type='text' placeholder="Please enter!"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
        value={val}
      />
    </form>
  )
}

export default Form
