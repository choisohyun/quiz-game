import React from "react";
import styled, { keyframes } from "styled-components";

import Text from "@Style/Text";
import Button from "@Style/Button";

interface IDescription {
  isUser?: boolean;
}

const Description = ({ isUser }: IDescription) => {
  return (
    <>
      <Wrapper>
        <AnimWrapper />
        {!isUser && (
          <Phrase fontSize="xxl" fontWeight="extraBold">
            지금 시작하여 퀴즈로
            <br />
            쉽게 공부해 보세요.
          </Phrase>
        )}
        <ButtonWrapper>
          <Button>{isUser ? "문제 풀러 가기" : "지금 바로 퀴즈 풀기"}</Button>
          <Button>{isUser ? "문제 만들러 가기" : "로그인하고 퀴즈 만들기"}</Button>
        </ButtonWrapper>
        <Text fontWeight="semiBold">{!isUser && "로그인 후 퀴즈를 풀면 풀이 기록을 남길 수 있습니다. :)"}</Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
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
  margin-top: 40px;
  &:after {
    animation: ${topToBottom} 3s linear infinite alternate;
    font-size: 5rem;
    font-weight: 800;
    content: "QUIZ EAZY";
    color: ${({ theme }) => theme.mode.gray4};
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

export default Description;
