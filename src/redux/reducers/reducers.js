import { combineReducers } from "redux";
import ACTION_TYPES from "../actions/action_types";
const {
  SET_USER_NAME,
  SET_GAME_SETTINGS,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  STARTED_TRIVIA,
  QUESTION_ANSWERED,
  FINISHED_TRIVIA,
} = ACTION_TYPES;

function userName(state = "", action) {
  switch (action.type) {
    case SET_USER_NAME:
      return action.userName;
    default:
      return state;
  }
}

function gameSettings(
  state = {
    category: "any",
    difficulty: "any",
  },
  action
) {
  switch (action.type) {
    case SET_GAME_SETTINGS:
      return {
        category: action.category,
        difficulty: action.difficulty,
      };
    default:
      return state;
  }
}

const questionsInitialState = {
  loading: false,
  questionsResults: [],
  error: "",
};

function questions(state = questionsInitialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        loading: true,
        questionsResults: {},
        error: "",
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questionsResults: action.payload,
        error: "",
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        loading: false,
        questionsResults: {},
        error: action.payload,
      };
    default:
      return state;
  }
}

function answers(state = [], action) {
  switch (action.type) {
    case QUESTION_ANSWERED:
      return [
        ...state,
        {
          answer: action.answer,
        },
      ];
    default:
      return state;
  }
}

function gameState(state = { hasFinished: false, time: null }, action) {
  switch (action.type) {
    case STARTED_TRIVIA:
      return {
        hasFinished: false,
        startTime: action.time,
      };
    case FINISHED_TRIVIA:
      return { 
        hasFinished: true, spendedTime: action.time 
      };
    default:
      return state;
  }
}

const trivialy = combineReducers({
  userName,
  gameSettings,
  questions,
  answers,
  gameState,
});

export default trivialy;
