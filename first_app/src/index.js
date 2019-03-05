import React from "react";
import ReactDOM from "react-dom";

function getButtontext() {
  return "click on ME !";
}

const App = () => {
  const buttonText = "click ME !";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButtontext()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
