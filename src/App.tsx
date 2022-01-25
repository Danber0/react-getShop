// @ts-ignore
import video from "./assets/video.webm";
import { useState } from "react";

import "./App.css";
import { Welcome } from "./components/Welcome";

function App() {
  const [step, setStep] = useState("welcome");

  return (
    <div className="App">
      <div className="row">
        <div className="video">
          <video className="video__media" autoPlay muted loop>
            <source src={video} type="video/webm" />
          </video>
          <Welcome />
        </div>
      </div>
    </div>
  );
}

export default App;
