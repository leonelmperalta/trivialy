import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {
  startedTrivia,
  questionAnswered,
  finishedTrivia,
} from "../redux/actions/actions";
import shuffleArray from "./functions/arrayShuffle";
import decodeHtml from "./functions/decodeHtml";

const mapDispatchToProps = {
  startedTrivia,
  questionAnswered,
  finishedTrivia,
};

const mapStateToProps = (state) => {
  return { questions: state.questions.questionsResults, startTime: state.gameState.startTime };
};

const Question = (props) => {

  const { questions, startTime, questionAnswered, startedTrivia, finishedTrivia } = props;
  const [questionIndex, setQuestionIndex] = useState(0);
  const actualQuestion = questions.results[questionIndex];
  const answers = shuffleArray(
    [actualQuestion.correct_answer].concat(actualQuestion.incorrect_answers)
  );
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (questionIndex === 0) {
      startedTrivia(new Date().getTime());
      questionAnswered(e.target.value);
      setQuestionIndex(questionIndex + 1);
    } else if (questionIndex < 19) {
      questionAnswered(e.target.value);
      setQuestionIndex(questionIndex + 1);
    } else if (questionIndex === 19) {
      questionAnswered(e.target.value);
      let timeSpended = new Date().getTime() - startTime;
      finishedTrivia(timeSpended);
      history.push("/finishedTrivia");
      
    }
  };



  return (
    <Fragment>
      <div className="question__container">
        <p className="question__paragraph"> {decodeHtml(actualQuestion.question)} </p>
        <div className="answers__container">
          <form className="answers__form">
            <input
              type="button"
              className="answers__option"
              onClick={handleClick}
              value={decodeHtml(answers[0])}
            />
            <input
              type="button"
              className="answers__option"
              onClick={handleClick}
              value={decodeHtml(answers[1])}
            />
            <input
              type="button"
              className="answers__option"
              onClick={handleClick}
              value={decodeHtml(answers[2])}
            />
            <input
              type="button"
              className="answers__option"
              onClick={handleClick}
              value={decodeHtml(answers[3])}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
