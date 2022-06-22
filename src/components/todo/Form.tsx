import * as React from "react";
import { useState } from "react"
import styled from "styled-components";

import { FORM_BORDER_COLOR, FORM_HEIGHT, FORM_WIDTH } from "../../utils/constants";

const TextForm = styled.input`
  width: ${FORM_WIDTH};
  height: ${FORM_HEIGHT};
  padding-left: 1rem;
  margin: 1rem 0 1rem 0;
  border: 1px solid ${FORM_BORDER_COLOR};
`
const TodoNum = styled.span`
  padding-left: 1rem;
`

const Form = ({addTodo, todosNum}): JSX.Element => {
  const [val, setVal] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (val === '') return

    addTodo(val)
    setVal('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextForm id='inputContent' type='text' placeholder="Please enter!"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
        value={val}
      />
      <TodoNum>{todosNum} todos</TodoNum>
    </form>
  )
}

export default Form
