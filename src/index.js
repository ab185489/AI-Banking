import ReactDOM from "react-dom";
import React from "react";
import MainContent from "./Components/MainContent/MainContent";
import "./index.scss";
const App = () => {
  return (
    <div className="cointainer">
      <MainContent />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
