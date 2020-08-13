import React from "react";

import Header from "@Header/Header";
import Description from "@MainPage/Description/Description";

const MainPage = () => {
  return (
    <>
      <Header type="user" />
      <Description isUser={false} />
    </>
  );
};

export default MainPage;
