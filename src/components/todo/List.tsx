import * as React from "react";
import { DragDropContext, Droppable, DroppableProvided } from "react-beautiful-dnd";
import { arrayMoveImmutable } from "array-move";
import styled from "styled-components";
import { List as UiList } from "@material-ui/core";

import { TodoObj } from "../../utils/interfaces";
import Item from "./Item";

const StyledTodoList = styled(UiList)`
  height: 90%;
  overflow: scroll;
`

const List = ({todos, delTodo, chkDoneAtTodo, setTodos}) => {
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    const startIndex = result.source.index - 1
    const endIndex = result.destination.index - 1
    console.log(startIndex, endIndex)

    const orderedTodos = arrayMoveImmutable(todos, startIndex, endIndex).map((todo: TodoObj, index: number) => {
      return {...todo, order: index + 1}
    })

    setTodos(orderedTodos)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppableTodo">
        {(provided: DroppableProvided) => (
          <StyledTodoList className="droppableTodo"
            {...provided.droppableProps} ref={provided.innerRef}
          >
            {todos.map((todo: TodoObj) => (
              <Item key={todo.id} todo={todo} delTodo={delTodo} chkDoneAtTodo={chkDoneAtTodo} />
            ))}
            {provided.placeholder}
          </StyledTodoList>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default List
