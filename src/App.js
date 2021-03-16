import Header from "./components/Header";
import style from "./styles/style.css";
import normalize from "normalize.css";
import Routes from "./components/Routes";
import { Fragment } from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./redux/reducers/reducers";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Fragment>
      <Header />
      <Provider store={store}>
        <Routes />
      </Provider>
    </Fragment>
  );
}

export default App;
