import React from "react";
import styled from "styled-components";

import Text from "@Style/Text";
import Button from "@Style/Button";
import Card from "@Card/Card";
import { media } from "@Style/util";

const BestQuiz = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Text fontSize="xl" fontWeight="extraBold">
            Best Quiz
          </Text>
          <Button>더 보기</Button>
        </Header>
        <CardWrapper>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardWrapper>
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

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.mode.border};
  ${Button} {
    height: 2.5rem;
    margin-left: 1rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export default BestQuiz;
