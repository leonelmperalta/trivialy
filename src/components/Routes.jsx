import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Categories from "./Categories";
import Login from "./Login";
import Trivia from "./Trivia";
import FinishedTrivia from "./FinishedTrivia";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
    hasFinished: state.gameState.hasFinished,
  };
};

const Routes = (props) => {
  const { isLogged, hasFinished } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {isLogged ? <Redirect to="/categories" /> : <Login />}
        </Route>
        <Route exact path="/">
          {isLogged ? <Redirect to="/categories" /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/categories">
          {isLogged ? <Categories /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/trivia">
          {isLogged ? <Trivia /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/finishedTrivia">
          {hasFinished ? <FinishedTrivia /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default connect(mapStateToProps)(Routes);
