import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import Categories from "./Categories";
import Login from "./Login";
import Trivia from "./Trivia";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "../redux/reducers/reducers";
import thunk from "redux-thunk";
import FinishedTrivia from "./FinishedTrivia";


const Routes = () => {
  
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
  ));
  
  return (
    <Provider store= {store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/trivia">
            <Trivia />
          </Route>
          <Route exact path="/finishedTrivia">
            <FinishedTrivia />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
