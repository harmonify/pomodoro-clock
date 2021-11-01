import React from "react";
import { SiReact, SiTypescript } from "react-icons/si";
import Store from "./Store";
import updateSessionLength from "./actions/updateSessionLength";
import updateBreakLength from "./actions/updateBreakLength";
import Card, { CardHeader, CardBody } from "./components/Card";
import CreditBox from "./components/CreditBox";
import TimerLength from "./components/TimerLength";
import useGlobalState from "./hooks/useGlobalState";

const App : React.FC = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <Store>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Card>
          <CardHeader content="Pomodoro Clock" />
          <CardBody>
            <div className="flex">
              <TimerLength
                label="Session Length"
                timerLength={state.sessionLength}
                setTimerLength={dispatch(updateSessionLength)}
              />
              <TimerLength
                label="Break Length"
                timerLength={state.breakLength}
                setTimerLength={dispatch(updateBreakLength)}
              />
            </div>
            <Timer

            />
          </CardBody>
        </Card>
        <CreditBox
          icons={[<SiReact />, <SiTypescript />]}
          link="https://www.github.com/harmonify"
          linkText="Wendy"
        />
      </div>
    </Store>
  );
};

export default App;
