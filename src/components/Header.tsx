import * as React from "react";
import styled from 'styled-components'
import Nav from "./Nav";

const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  color: #fff;
  background-color: #283c86;
`
const HeaderLogo = styled.div`
  padding: 12px 0;
  font-weight: bold;
  font-size: 2rem;
`

const Header: React.FC = (): JSX.Element => (
  <HeaderStyle>
    <HeaderLogo>What to do ?</HeaderLogo>
    <Nav />
  </HeaderStyle>
)

export default Header
