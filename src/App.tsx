// @ts-ignore
import video from "./assets/video.webm";
import { useState } from "react";

import "./App.scss";
import { Welcome } from "./components/Welcome";
import { Input } from "./components/InputMask";
import { Result } from "./components/Result";

function App() {
  const [step, setStep] = useState<"welcome" | "input" | "result">("welcome");

  const inputNumber = () => {
    setStep("input");
  };

  const result = () => {
    setStep("result");
  };

  const steps = {
    welcome: <Welcome inputNumber={inputNumber} />,
    input: <Input result={result} />,
    result: <Result />,
  };

  return (
    <div className="App">
      <div className="row">
        <div className="user">{steps[step]}</div>
      </div>
    </div>
  );
}

export default App;
