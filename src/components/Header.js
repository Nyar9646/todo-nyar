import React from "react";
import styled from 'styled-components'

const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  background-color: #283c86;
`
const HeaderLogo = styled.div`
  padding: 12px 0;
  font-weight: bold;
  font-size: 18px;
`
const HeaderNav = styled.nav`
  ul {
    display: flex;
    padding: 12px 0;
  }
  li {
    margin-left: 40px;
    font-size: 15px;
  }
`

const Header = () => (
  <HeaderStyle>
    <HeaderLogo>What to do ?</HeaderLogo>
    <HeaderNav>
      <ul>
        <li>todo</li>
        <li>about</li>
      </ul>
    </HeaderNav>
  </HeaderStyle>
)

export default Header
