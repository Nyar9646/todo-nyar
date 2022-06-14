import * as React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import { ListItem } from "@material-ui/core";

import { FavoriteStar } from "../../utils/FavoriteShape";

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
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 1rem;
`
const DeleteButton = styled.button`
  display: block;
  position: relative;
  background-color: #f1ffff;
  right: 1rem;
  cursor: pointer;
  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 3rem;
    background: #999;
  };
  &:before {
    transform: translate(-50%, -50%) rotate(45deg)
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg)
  }
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
          <DeleteButton onClick={() => delTodo(todo.id)}/>
        </TodoItem>
      )}
    </Draggable>
  )
}

export default Item
