import React from "react";
import styled from "styled-components";

import Text from "@Style/Text";
import Avatar from "@Style/Avatar";

const Card = () => {
  return (
    <>
      <Wrapper>
        <Title fontSize="xl" fontWeight="semiBold">
          Javascript Execution
        </Title>
        <Text fontSize="lg">20개</Text>
        <AuthorWrapper>
          <Avatar src="" />
          <Text>sohyun4293</Text>
        </AuthorWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.mode.border};
  box-shadow: 0 1px 3px ${({ theme }) => theme.mode.divider};
  margin: 0 0.7rem;
  padding: 1rem;
  ${Text} {
    width: 100%;
  }
`;

const Title = styled(Text)`
  height: 3rem;
  white-space: normal;
  word-wrap: break-word;
  line-height: 1.2;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const AuthorWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default Card;
