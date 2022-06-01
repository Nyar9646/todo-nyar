import React, {useState} from "react";
import styled from "styled-components";

const TextForm = styled.input`
  width: 20rem;
  height: 3rem;
  padding-left: 1rem;
  margin: 1rem;
  border: 1px solid #999;
`

const Form = ({addTodo}) => {
  const [val, setVal] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if(val === '') {
      return
    }

    addTodo(val)
    const inputContent = document.getElementById('inputContent')
    inputContent.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextForm id='inputContent' type='text' placeholder="Please enter!"
        onChange={e => setVal(e.target.value)}
      />
    </form>
  )
}

export default Form
