import React from 'react'
import styled from 'styled-components'

const InnerHam = (): styled.css => {
  return `
    display: block;
    width: 2.5rem;
    height: 3px;
    content: '';
    border-radius: 3px;
    background-color: #ccc;
    position: absolute;
`
}

const OuterHam = styled.label`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  span {
    ${InnerHam}

    &::before {
      ${InnerHam}
      bottom: 8px;
    }
    &::after {
      ${InnerHam}
      top: 8px;
    }
  }
`

const HamIcon: React.FC = (): JSX.Element => (
  <OuterHam>
    <span />
    <span />
  </OuterHam>
)

export default HamIcon
