import React, {useState} from "react";

const Form = ({addTodo}) => {
  const [val, setVal] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if(val === '') {
      alert('Todo 内容が未入力です')
      return
    }

    addTodo(val)

    const inputContent = document.getElementById('inputContent')
    inputContent.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='inputContent' type='text' onChange={e => setVal(e.target.value)} />
    </form>
  )
}

export default Form
