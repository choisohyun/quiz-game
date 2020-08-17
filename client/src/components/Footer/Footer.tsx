import React from "react";
import styled from "styled-components";

const Footer = () => {
  const gitUrl = "https://github.com/choisohyun";

  return (
    <>
      <Wrapper>
        Copyright © <a href={gitUrl}>choisohyun</a> All rights reserved.
      </Wrapper>
    </>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.mode.gray3};
  color: ${({ theme }) => theme.mode.primaryText};
  font-size: 12px;
  text-align: center;
  line-height: 50px;
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: ${({ theme }) => theme.mode.secondaryText};
  }
  a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.mode.background};
  }
`;

export default Footer;
