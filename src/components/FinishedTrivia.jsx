import React, { Fragment } from "react";
import { connect } from "react-redux";
import convertToMMSS from "./milisecondsToMMSS";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers,
    userName: state.userName,
    spendedTime: state.gameState.spendedTime,
  };
};

const FinishedTrivia = (props) => {
  const { questions, answers, userName, spendedTime } = props;

  const correct_answers = () => {
    let corrects = questions.questionsResults.results.map((question) => {
      return question.correct_answer;
    });
    console.log(corrects);
    let points = 0;
    answers.forEach((a) => {
      console.log(a.answer)
      if (corrects.includes(a.answer)) {
        points++;
      }
    });
    return points;
  };

  return (
    <div className="trivia__container">
      <h2 className="trivia__result-title">Congratulations {userName}!</h2>
      <h3 className="trivia__result-subtitle">You scored:</h3>
      <h1 className="trivia__result-points">{correct_answers()} Points!</h1>
      <h3 className= "trivia__result-subtitle">Your time: </h3>
      <h1 className="trivia__result-points">{convertToMMSS(spendedTime)}</h1>
    </div>
  );
};

export default connect(mapStateToProps)(FinishedTrivia);
