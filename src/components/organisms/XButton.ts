import styled from 'styled-components'
import { DEFAULT_BUTTON_COLOR, HOVER_BUTTON_COLOR } from '../../utils/constants'

const XButton = styled.button`
  display: block;
  width: 3rem;
  position: relative;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:before, &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3rem;
    background: ${DEFAULT_BUTTON_COLOR};
  };
  &:before {
    transform: translate(-50%, -50%) rotate(45deg)
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg)
  }
  &:hover {
    &:before, &:after {
      background: ${HOVER_BUTTON_COLOR};
    }
  }
`

export default XButton
