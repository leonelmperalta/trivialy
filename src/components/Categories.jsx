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
            <option value="any">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
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
            <option value="any">Any Difficulty</option>
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
