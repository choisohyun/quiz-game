import React from "react";
import styled, { keyframes } from "styled-components";

import Header from "@Header/Header";
import Text from "@Style/Text";
import Button from "@Style/Button";

const MainPage = () => {
  return (
    <>
      <Header type="user" />
      <Description>
        <AnimWrapper />
        <Phrase fontSize="xxl" fontWeight="extraBold">
          지금 시작하여 퀴즈로
          <br />
          쉽게 공부해 보세요.
        </Phrase>
        <ButtonWrapper>
          <Button>지금 바로 퀴즈 풀기</Button>
          <Button>로그인하고 퀴즈 만들기</Button>
        </ButtonWrapper>
        <Text fontWeight="semiBold">로그인 후 퀴즈를 풀면 풀이 기록을 남길 수 있습니다. :)</Text>
      </Description>
    </>
  );
};

const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const topToBottom = keyframes`
  0% { content: "QUIZ EAZY"; }
  50% { color: white; }
  100% { content: "QUIZY"; }
`;

const AnimWrapper = styled.div`
  width: 100%;
  text-indent: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  &:after {
    animation: ${topToBottom} 3s linear infinite alternate;
    font-size: 5rem;
    font-weight: 800;
    content: "QUIZ EAZY";
    color: ${({ theme }) => theme.light.gray4};
    text-align: center;
  }
`;

const Phrase = styled(Text)`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  ${Button}:first-child {
    margin-right: 0.5rem;
  }
`;

export default MainPage;
