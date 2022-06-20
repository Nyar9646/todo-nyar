import * as React from "react";
import { useState } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";

import { DEFAULT_ITEM_COLOR, HOVER_ITEM_COLOR, CONTENTS_FONT_SIZE } from "../../utils/constants";
import FavoriteStar from "../organisms/FavoriteStar";
import HamButton from "../organisms/HamButton";
import XButton from "../organisms/XButton";

const TodoItem = styled(ListItem)`
  display: flex;
  height: 4.5rem;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${DEFAULT_ITEM_COLOR};
  margin-bottom: 1rem;
  cursor: grab;

  &:hover {
    background-color: ${HOVER_ITEM_COLOR};
  }
  &:active {
    box-shadow: 0 0 1rem 2px #fff;
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
  pointer-events: auto;
`

const Item = ({todo, delTodo, updTodoContent, switchFavorite}): JSX.Element => {
  const [inputValue, setInputValue] = useState(todo.content)

  // todo :enter で更新処理をはしらせる
  const handleUpdTodo = (e) => {
    console.log(e.target.value)
    console.log(inputValue)
    setInputValue(e.target.value)
    updTodoContent(todo.id, inputValue)
  }

  return (
    <Draggable key={todo.id} draggableId={todo.id} index={todo.order}>
      {(provided: DraggableProvided) => (
        <TodoItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <FavoriteStar isSwitching={todo.isFavorite} onClick={() => switchFavorite(todo.id)} />
          <TodoContent onChange={handleUpdTodo} defaultValue={inputValue} />
          <DraggableHam />
          <XButton onClick={() => delTodo(todo.id)}/>
        </TodoItem>
      )}
    </Draggable>
  )
}

export default Item
