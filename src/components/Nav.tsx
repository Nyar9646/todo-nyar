import * as React from "react";
import styled from "styled-components";

const HamStyle = styled.div`
  display: none;
`
const NavStyle = styled.nav`
  ul {
    display: flex;
    padding: 12px 0;
  }
  li {
    margin-left: 4rem;
    font-size: 1.5rem;
  }
`

const Nav: React.FC = () => (
  <>
    <HamStyle>
      <span />
      <span />
      <span />
    </HamStyle>
    <NavStyle>
      <ul>
        <li>todo</li>
        <li>about</li>
      </ul>
    </NavStyle>
  </>
)

export default Nav
