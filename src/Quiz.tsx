// src/components/Quiz.tsx
import React, { useState } from "react";
import { Answer, QuestionData } from "./QuestionTypes";
import HTMLReactParser from "html-react-parser";
import QuizResults from "./QuizResults";

interface QuizProps {
  questions: QuestionData[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<Answer>({
    id: "",
    label: "",
  });

  const [score, setScore] = useState<number>(0);
  const [displayResults, setdisplayResults] = useState<boolean>(false);

  // questions[currentQuestion].Response=""
  const handleAnswerClick = (
    selectedAnswerId: string,
    selectedLabel: string
  ) => {
    if (selectedAnswerId === questions[currentQuestion].Response) {
      setScore((prevScore) => prevScore + 1);
      questions[currentQuestion].QuestionStatus = "Correct"

      console.log(score);
    }
    else {
      questions[currentQuestion].QuestionStatus = "Incorrect"

    }
    setChecked(true);
    setOptionSelected({ id: selectedAnswerId, label: "" });

    questions[currentQuestion].selectedResponse = selectedLabel;
  };

  const onNext = () => {
    const nextQuestion = currentQuestion + 1;
    setChecked(false);
    setOptionSelected({ id: "", label: "" });

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setdisplayResults(true);
    }
  };
  const parseHtml = (
    htmlText: string,
    clickHandler?: any,
    isAsterisk: boolean = false
  ) => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Enter") {
        clickHandler(e);
      }
    };
    return HTMLReactParser(htmlText, {
      replace: (node: any) => {
        if (
          node.name === "a" &&
          node.attribs &&
          node.attribs.modal_reference_id
        ) {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              onClick={clickHandler}
              className="anchor"
              onKeyDown={(e) => handleKeyDown(e)}
              role="button"
            >
              {node?.children?.[0]?.data}
            </a>
          );
        }
      },
    });
  };

  return (
    <div style={{ marginRight: '20px' }}>
      {!displayResults && (
        <div>
          <h1 style={{ textAlign: "center" }}>Quiz</h1>
          {currentQuestion < questions.length && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <span style={{marginLeft: '40px', marginRight: '10px'}}>{currentQuestion + 1 + '.'}</span>

                <span style={{ marginBottom: "20px" }}>
                  {parseHtml(questions[currentQuestion].QuestionText)}
                </span>
              </div>
              <ul>
                {questions[currentQuestion].ResponseOptions.map((option) => (
                  <>
                    <div
                      className="options"
                      style={{
                        backgroundColor:
                          checked && option.id === optionSelected.id
                            ? "#9badd7"
                            : "#E7E9EB",
                      }}
                      onClick={() => handleAnswerClick(option.id, option.label)}
                    >
                      <input
                        type="radio"
                        required
                        checked={checked && option.id === optionSelected.id}
                      />
                      <li
                        style={{ listStyleType: "none", marginLeft: "20px" }}
                        key={option.id}
                      >
                        {option.label}
                      </li>
                    </div>
                    <br />
                  </>
                ))}
              </ul>
            </div>
          )}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNext()}
              style={{ position: 'fixed', top: '600px' }}
              disabled={!checked}
              id="liveToastBtn"


            >
              {currentQuestion !== questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      )}
      {displayResults && <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>}

      {displayResults && <QuizResults questions={questions} score={score} />}



    </div>
  );
};

export default Quiz;
