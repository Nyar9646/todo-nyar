import * as React from "react";
import { DragDropContext, Droppable, DroppableProvided } from "react-beautiful-dnd";
import { arrayMoveImmutable } from "array-move";
import { List as UiList } from "@material-ui/core";
import styled from "styled-components";

import { LIST_HEIGHT } from "../../utils/constants";
import { TodoObj } from "../../utils/interfaces";
import Item from "./Item";

const StyledTodoList = styled(UiList)`
  height: ${LIST_HEIGHT};
  overflow: scroll;
`

const List = ({todos, delTodo, updTodoContent, switchFavorite, setTodos}): JSX.Element => {
  const handleOnDragEnd = (result: any): void => {
    if (!result.destination) return

    const startIndex = result.source.index - 1
    const endIndex = result.destination.index - 1

    const orderedTodos = arrayMoveImmutable(todos, startIndex, endIndex)
      .map((todo: TodoObj, index: number): TodoObj => {
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
              <Item key={todo.id} todo={todo}
                delTodo={delTodo} updTodoContent={updTodoContent} switchFavorite={switchFavorite}
              />
            ))}
            {provided.placeholder}
          </StyledTodoList>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default List
