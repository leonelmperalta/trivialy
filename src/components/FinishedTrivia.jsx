import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { cleanAnswers } from "../redux/actions/actions";
import convertToMMSS from "./functions/milisecondsToMMSS";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers,
    userName: state.userName,
    spendedTime: state.gameState.spendedTime,
  };
};

const mapDispatchToProps = {
  cleanAnswers,
}

const FinishedTrivia = (props) => {
  const { questions, answers, userName, spendedTime,cleanAnswers } = props;

  let history = useHistory();

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

  const playAgain = () =>{
    cleanAnswers();
    history.push('/categories');
  }

  return (
    <div className="trivia__result-container">
      <h4 className="trivia__result-title">Congratulations {userName}!</h4>
      <h6 className="trivia__result-subtitle">You scored:</h6>
      <h3 className="trivia__result-green">{correct_answers()} Points!</h3>
      <h6 className= "trivia__result-subtitle">Your time: </h6>
      <h3 className="trivia__result-green">{convertToMMSS(spendedTime)}</h3>
      <button className="trivia__result-subtitle" onClick={playAgain}>Play again!</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishedTrivia);
