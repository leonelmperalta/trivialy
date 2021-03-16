import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {setGameSettings} from "../redux/actions/actions";


const mapStateToProps = (state) => {
  return {
    gameSettings: state.gameSettings,
  }
}
const mapDispatchToProps = {
  setGameSettings,
};

const Categories = (props) => {
  const { setGameSettings } = props;
  const { gameSettings } = props;
  let history = useHistory();

  const handleChange = (e) => {
    setGameSettings({ ...gameSettings, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/trivia");
  };

  return (
    <Fragment>
      <div className="categories__container">
        <form className="categories__form">
          <label htmlFor="category" className="categories__label">
            {" "}
            Choose a categorie:{" "}
          </label>
          <select
            name="category"
            className="categories__input"
            onChange={handleChange}
          >
            <option value="">any</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
          </select>
          <label htmlFor="difficulty" className="categories__label">
            {" "}
            Choose dificulty:{" "}
          </label>
          <select
            name="difficulty"
            className="categories__input"
            onChange={handleChange}
          >
            <option value="">any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="categories__button" onClick={handleClick}>
            {" "}
            Play!
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
