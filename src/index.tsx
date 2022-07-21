import React from "react";
import reactDom from "react-dom";
import Demo1 from './views/demo1/index'

try {
  const rootElement = document.querySelector("#root");
  const App = () => {
    return <div className="hello"><Demo1 /></div>;
  };
  reactDom.render(<App />, rootElement);
} catch (error) {
    console.error(error)
}
