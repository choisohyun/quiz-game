import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import { dark, light, fontSizes, fontWeights } from "@Style/theme";
import { useDarkMode } from "@/hooks/useDarkMode";

const MainPage = lazy(() => import("@MainPage/MainPage"));
const MyPage = lazy(() => import("@MyPage/MyPage"));
const QuizListPage = lazy(() => import("@QuizListPage/QuizListPage"));
const QuizDetailPage = lazy(() => import("@QuizDetailPage/QuizDetailPage"));
const QuizPage = lazy(() => import("@QuizPage/QuizPage"));
const NewQuizPage = lazy(() => import("@NewQuizPage/NewQuizPage"));
const Loading = lazy(() => import("@Loading/Loading"));
const ErrorPage = lazy(() => import("@ErrorPage/ErrorPage"));

const App = () => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme =
    themeMode === "light" ? { mode: light, fontSizes, fontWeights } : { mode: dark, fontSizes, fontWeights };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/mypage" exact component={MyPage} />
              <Route path="/quiz" exact component={QuizListPage} />
              <Route path="/quiz/:quizId" exact component={QuizDetailPage} />
              <Route path="/quiz/:quizId/:quizNumber" exact component={QuizPage} />
              <Route path="/new" exact component={NewQuizPage} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
