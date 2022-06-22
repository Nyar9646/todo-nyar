import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS, DEFAULT_BUTTON_COLOR, HOVER_BUTTON_COLOR } from '../../utils/constants'

const commonStyle = (): styled.css => `
  display: inline-block;
  box-sizing: border-box;
`

const OuterHam = styled.button`
  ${commonStyle}
  position: relative;
  width: 3rem;
  height: 2.5rem;
  background: none;
  appearance: none;
  cursor: grab;
  margin: 1rem;

  &:hover {
    * {
      background-color: ${HOVER_BUTTON_COLOR};
    }
  }
  &:active {
    cursor: grabbing;
  }
`
const InnerHam = styled.span`
  ${commonStyle}
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: ${DEFAULT_BUTTON_COLOR};
  border-radius: ${BORDER_RADIUS};

  &:nth-of-type(1) {
    top: 0;
  }
  &:nth-of-type(2) {
    top: 1.1rem;
  }
  &:nth-of-type(3) {
    bottom: 0;
  }
`

const HamButton: React.FC = (): JSX.Element => (
  <OuterHam>
    <InnerHam />
    <InnerHam />
    <InnerHam />
  </OuterHam>
)

export default HamButton
