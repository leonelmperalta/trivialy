import Header from "./components/Header";
import style from "./styles/style.css";
import normalize from "normalize.css";
import Routes from "./components/Routes";
import { Fragment } from "react";



function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}

export default App;
