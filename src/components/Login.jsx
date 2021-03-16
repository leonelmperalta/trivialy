import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserName, login } from "../redux/actions/actions";

const mapDispatchToProps = {
  setUserName,
  login,
};
const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const Login = (props) => {
  const { userName, setUserName, login } = props;
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    if (userName === null || userName === undefined || userName.trim() === "") {
      alert("escribi tu nombre crack");
      return;
    }
    login();
    history.push("/categories");
  };

  return (
    <Fragment>
      <div className="login">
        <h2 className="login__h3">Welcome Mr. {userName} !</h2>
        <form className="login__form">
          <label htmlFor="name" className="login__label">
            Your name:
            <input
              type="text"
              id="name"
              name="name"
              className="login__input"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>

          <button className="login__button" onClick={handleClick}>
            Send!
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
