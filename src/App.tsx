import Card, { CardHeader, CardBody } from "./components/Card";
import TimerLengthControl from "./components/TimerLengthControl";
import Timer from "./components/Timer";
import TimerControl from "./components/TimerControl";
import CreditBox from "./components/CreditBox";
import React from "react";

function App() {
  return (
    <div>
      <Card>
        <CardHeader content="Pomodoro Clock" />
        <CardBody>
          <div className="flex">
            <TimerLengthControl />
            <TimerLengthControl />
          </div>
          <Timer />
          <TimerControl />
        </CardBody>
      </Card>
      <CreditBox
        icons = {["fab fa-github", "fab fa-linkedin"]}
        link="https://www.github.com/harmonify"
        linkText="Wendy"
      />
    </div>
  );
}

export default App;
