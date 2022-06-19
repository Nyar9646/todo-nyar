import styled, { keyframes } from "styled-components";

const defaultFill: number = 10
const defaultSize: number = 15
const defaultColor: string = '#c0c0c0'
const favoriteColor: string = '#f90'
const hoverColor: string = '#d8d8d8'
const hoverFavoriteColor: string = '#fec317'

const toStr = (num: number): string => num.toString()

const switchStarColor = (isSwitching: boolean): string =>
  isSwitching ? favoriteColor : defaultColor

const switchHoverStarColor = (isSwitching: boolean): string =>
  isSwitching ? hoverFavoriteColor : hoverColor

const animation = keyframes`
  0% { transform: scale(1, 1) }
  50% { transform: scale(0.98, 1.15) }
`

const basicStar = (color: string, fill: number, size: number): styled.css => `
  border-bottom: ${toStr(fill)}px solid ${color};
  border-right: ${toStr(size)}px solid transparent;
  border-left: ${toStr(size)}px solid transparent;
`

const pseudoStar = (): styled.css => `
  content: "";
  position: absolute;
  left: -${toStr(defaultSize)}px;
`

const FavoriteStar = styled.div`
  position: relative;
  ${({isSwitching}) => basicStar(switchStarColor(isSwitching), defaultFill, defaultSize)}
  transform: rotate(-37deg);
  cursor: pointer;

  &:active {
    animation-name: ${animation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  &:before, &:after {
    ${pseudoStar()}
    ${({isSwitching}) => basicStar(switchStarColor(isSwitching), defaultFill, defaultSize)}
  }
  &:before {
    transform: rotate(-71.5deg);
  }
  &:after {
    transform: rotate(71.5deg);
  }
  &:hover {
    ${({isSwitching}) => basicStar(switchHoverStarColor(isSwitching), defaultFill, defaultSize)}

    &:before, &:after {
      ${({isSwitching}) => basicStar(switchHoverStarColor(isSwitching), defaultFill, defaultSize)}
    }
  }
`

export default FavoriteStar
