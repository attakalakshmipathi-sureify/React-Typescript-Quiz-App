import React, { useState } from "react";
import { Answer, QuestionData } from "./QuestionTypes";
import HTMLReactParser from "html-react-parser";

type Props = {
  score: number;
  questions: QuestionData[];
};

const QuizResults = ({ questions, score }: Props) => {
  console.log(questions);
  console.log(typeof score);
  

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
    
    <div style={{marginRight: '20px'}}>
      <strong>
        {" "}
        <span style={{ display: "flex", justifyContent: "center" }}>
          <h1>Quiz Results</h1>
        </span>
      </strong>
      {score > 5 && <h2 style={{marginLeft:'40px'}}>Congratulations on your brilliant triumph. You aced that test!</h2>}
      {score <= 5 && (
        <h2 style={{marginLeft:'40px'}}>
          Sorry! You have failed the Quiz,Try to reattempt after Revising the
          Concepts.
        </h2>
      )}

      <h2 style={{marginLeft:'40px'}}>Your Scored {score} out of 10.</h2>
      <ul>
        {questions !== undefined &&
          questions.map((text: any) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  backgroundColor: "#E7E9EB",
                  marginBottom: '20px',
                  padding: '20px',
                  borderRadius: '30px'
                }}
              >
                <div style={{display:'flex'}}>
                <li style={{ listStyleType: "none",marginRight:'5px'}}>
                  {text.QuestionId}{"."}
                </li>
                <li style={{ listStyleType: "none" }}>
                  {parseHtml(text.QuestionText)}
                </li>
                </div>
                <div style={{ marginLeft:'20px'}}>
                <span>Your Answer is <span style={{color:text.QuestionStatus==="Correct" ? '#1d9338' : 'red',fontWeight:800}}> {text.QuestionStatus}</span></span>
               <br></br>
                <span>Your Answer:</span>
                <li style={{ listStyleType: "none" }}>
                  {parseHtml(text.selectedResponse)}
                </li>
                <span>Correct Answer is :</span>{" "}
                <li style={{ listStyleType: "none", }}>
                  {parseHtml(text.CorrectResponse)}
                </li>
                <span>Explanation :</span>
                <li style={{ listStyleType: "none" }}>
                  {parseHtml(text.Explanation)}
                </li>
                </div>
              </div>
            </>
          ))}
      </ul>
    </div>
  );
};

export default QuizResults;
