import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
