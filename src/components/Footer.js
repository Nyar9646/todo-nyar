import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  color: #fff;
  background-color: black;
`

const Footer = () => (
  <FooterStyle>@2022 created by Nyar</FooterStyle>
)

export default Footer
