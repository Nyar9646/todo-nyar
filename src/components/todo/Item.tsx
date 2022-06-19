import * as React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";

import { CONTENTS_FONT_SIZE } from "../../utils/constants";
import FavoriteStar from "../organisms/FavoriteStar";
import HamButton from "../organisms/HamButton";
import XButton from "../organisms/XButton";

const TodoItem = styled(ListItem)`
  display: flex;
  height: 4.5rem;
  justify-content: space-between;
  border-radius: 4px;
  background-color: #f1ffff;
  margin-bottom: 1rem;
  cursor: grab;

  &:hover {
    background-color: #dfd;
  }
  &:active {
    box-shadow: 0 0 1rem 2px #fff;
    transition: box-shadow .3s;
    cursor: grabbing;
  }
`
const TodoLabel = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`
const TodoContent = styled.span`
  white-space: nowrap;
  font-size: ${CONTENTS_FONT_SIZE};
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 1rem;
`
const ButtonWrapper = styled.div`
  display: flex;
`

const Item = ({todo, delTodo, switchFavorite}): JSX.Element => {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={todo.order}>
      {(provided: DraggableProvided) => (
        <TodoItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <TodoLabel>
            <FavoriteStar isSwitching={todo.isFavorite} onClick={() => switchFavorite(todo.id)} />
            <TodoContent>{todo.content}</TodoContent>
          </TodoLabel>
          <ButtonWrapper>
            <HamButton />
            <XButton onClick={() => delTodo(todo.id)}/>
          </ButtonWrapper>
        </TodoItem>
      )}
    </Draggable>
  )
}

export default Item
