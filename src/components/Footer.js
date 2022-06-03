import React from "react";
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

const Footer = () => (
  <FooterStyle>@2022 created by Nyar</FooterStyle>
)

export default Footer
