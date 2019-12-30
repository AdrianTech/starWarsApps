import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import StarWarsContextProvider from "./context/context";
import Main from "./components/Main";
import "@babel/polyfill/noConflict";

export default function App(): JSX.Element {
  return (
    <StarWarsContextProvider>
      <Main />
    </StarWarsContextProvider>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
