import React from "react";

import Header from "@Header/Header";
import Description from "@MainPage/Description/Description";
import BestQuiz from "@MainPage/BestQuiz/BestQuiz";

const MainPage = () => {
  return (
    <>
      <Header type="user" />
      <Description isUser={false} />
      <BestQuiz />
    </>
  );
};

export default MainPage;
