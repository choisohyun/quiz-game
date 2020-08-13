import React from "react";

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

export default Card;
