import * as React from "react";
import { useState } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";

import {
  DEFAULT_ITEM_COLOR,
  HOVER_ITEM_COLOR,
  CONTENTS_FONT_SIZE,
  ITEM_HEIGHT,
  BORDER_RADIUS,
  SHADOW_COLOR
} from "../../utils/constants";
import FavoriteStar from "../organisms/FavoriteStar";
import HamButton from "../organisms/HamButton";
import XButton from "../organisms/XButton";

const TodoItem = styled(ListItem)`
  display: flex;
  height: ${ITEM_HEIGHT};
  justify-content: space-between;
  border-radius: ${BORDER_RADIUS};
  background-color: ${DEFAULT_ITEM_COLOR};
  margin-bottom: 1rem;
  cursor: grab;

  &:hover {
    background-color: ${HOVER_ITEM_COLOR};
  }
  &:active {
    box-shadow: 0 0 1rem 2px ${SHADOW_COLOR};
    transition: box-shadow .3s;
    cursor: grabbing;
  }
`
const TodoContent = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  background-color: ${DEFAULT_ITEM_COLOR};
  white-space: nowrap;
  font-size: ${CONTENTS_FONT_SIZE};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 1rem;
`
const DraggableHam = styled(HamButton)`
`

const Item = ({todo, delTodo, updTodoContent, updTodoFavorite}): JSX.Element => {
  const [itemValue, setItemValue] = useState(todo.content)

  const handleUpdTodo = (keyEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyEvent.key === 'Enter') {
      keyEvent.preventDefault()
      updTodoContent(todo.id, itemValue)
    }
  }

  return (
    <Draggable key={todo.id} draggableId={todo.id} index={todo.order}>
      {(provided: DraggableProvided) => (
        <TodoItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <FavoriteStar isSwitching={todo.isFavorite} onClick={() => updTodoFavorite(todo.id)} />
          <TodoContent
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemValue(e.target.value)}
            onKeyDown={handleUpdTodo}
            defaultValue={itemValue}
          />
          <DraggableHam />
          <XButton onClick={() => delTodo(todo.id)}/>
        </TodoItem>
      )}
    </Draggable>
  )
}

export default Item
