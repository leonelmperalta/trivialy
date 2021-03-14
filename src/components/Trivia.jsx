import React, { Fragment, useEffect } from "react";
import Question from "./Question";
import Loading from "./Loading";
import { connect } from "react-redux";
import { fetchQuestions } from "../redux/actions/actions";

const mapStateToProps = (state) => {
  return {
    gameSettings: state.gameSettings,
    questions: state.questions,
  };
};

const mapDispatchToProps = {
  fetchQuestions,
};

const Trivia = (props) => {
  const { gameSettings, questions } = props;
  const { fetchQuestions } = props;

  useEffect(() => {
    fetchQuestions(gameSettings.category, gameSettings.difficulty);
  }, []);

  return (
    <Fragment>
      {questions.loading && <Loading />}
      {Object.keys(questions.questionsResults).length >= 1 && (
        <div className="trivia__container">
          <Question />
        </div>
      )}
      {!questions.error === "" && <p> question.error </p>}
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
