import * as React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  color: #fff;
  background-color: #283c86;
`

const Footer: React.FC = (): JSX.Element => (
  <FooterStyle>@2022-06  Nyar</FooterStyle>
)

export default Footer
