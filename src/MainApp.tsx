import React from "react";
import { questions } from "../src/Questions";
import Quiz from "../src/Quiz";

const MainApp: React.FC = () => {
  return <Quiz questions={questions} />;
};

export default MainApp;