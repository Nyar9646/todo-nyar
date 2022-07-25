import * as React from "react";
import { DragDropContext, Droppable, DroppableProvided } from "react-beautiful-dnd";
import { List as UiList } from "@material-ui/core";
import styled from "styled-components";

import { LIST_HEIGHT } from "../../utils/constants";
import { TodoObj } from "../../utils/types";
import Item from "./Item";

const TodoList = styled(UiList)`
  height: ${LIST_HEIGHT};
  overflow: scroll;
`

const List = ({todos, delTodo, updTodoContent, updTodoFavorite, updTodoOrder}): JSX.Element => {
  const handleOnDragEnd = (result: any): void => {
    if (!result.destination) return

    const startIndex = result.source.index - 1
    const endIndex = result.destination.index - 1
    updTodoOrder(startIndex, endIndex)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppableTodo">
        {(provided: DroppableProvided) => (
          <TodoList className="droppableTodo"
            {...provided.droppableProps} ref={provided.innerRef}
          >
            {todos.map((todo: TodoObj) => (
              <Item key={todo.id} todo={todo}
                delTodo={delTodo} updTodoContent={updTodoContent} updTodoFavorite={updTodoFavorite}
              />
            ))}
            {provided.placeholder}
          </TodoList>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default List
