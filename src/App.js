import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "6557969cd82e6992fdf5d3f55c7e2ebb2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("this code was executed");
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <h1>Alan AI React App</h1>
    </div>
  );
}

export default App;
