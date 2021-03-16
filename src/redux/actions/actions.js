import axios from "axios";
import ACTION_TYPES from "./action_types";

const {
  LOGIN,
  SET_USER_NAME,
  SET_GAME_SETTINGS,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  STARTED_TRIVIA,
  QUESTION_ANSWERED,
  FINISHED_TRIVIA,
  CLEAN_ANSWERS
} = ACTION_TYPES;

//Actions

export function login(){
  return {
    type: LOGIN,
  }
}

export function setUserName(userName) {
  return {
    type: SET_USER_NAME,
    userName,
  };
}

export function setGameSettings(gameSettings) {
  let {category, difficulty} = gameSettings;
  return {
    type: SET_GAME_SETTINGS,
    category,
    difficulty,
  };
}

export function fetchQuestionsRequest() {
  return {
    type: FETCH_QUESTIONS_REQUEST,
  };
}

export function fetchQuestionsSuccess(response) {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: response,
  };
}

export function fetchQuestionsFailure(error) {
  return {
    type: FETCH_QUESTIONS_FAILURE,
    payload: error,
  };
}

export const fetchQuestions = (category, difficulty) => {
  return dispatch => {
    dispatch(fetchQuestionsRequest());

    axios.get(`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(res => {
      dispatch(fetchQuestionsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchQuestionsFailure(err.message));
    })
  }
}

export function startedTrivia(time){
  return{
    type: STARTED_TRIVIA,
    time
  }
}

export function questionAnswered(answer) {
  return {
    type: QUESTION_ANSWERED,
    answer,
  };
}

export function finishedTrivia(time) {
  return {
    type: FINISHED_TRIVIA,
    time
  };
}

export function cleanAnswers() {
  return {
    type: CLEAN_ANSWERS,
  }
}
