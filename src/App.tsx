import { ReactElement } from "react";
import updateBreakLength from "./actions/updateBreakLength";
import updateSessionLength from "./actions/updateSessionLength";
import Card from "./components/Card";
import CreditBox from "./components/CreditBox";
import Timer from "./components/Timer";
import TimerLength from "./components/TimerLength";
import AUTHOR from "./configs/AUTHOR";
import { ReactIcon, TypeScriptIcon } from "./configs/ICONS";
import useGlobalState from "./hooks/useGlobalState";

const App = (): ReactElement => {
  const [state] = useGlobalState();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-3 bg-red-400 text-white select-none">
      <Card title={["Pomodoro Clock", "🍅"]}>
        <>
          <div className="flex justify-between space-x-8 py-3">
            <TimerLength
              id="session"
              label="Session Length"
              timerLength={state.sessionLength}
              setTimerLength={updateSessionLength}
            />
            <TimerLength
              id="break"
              label="Break Length"
              timerLength={state.breakLength}
              setTimerLength={updateBreakLength}
            />
          </div>
          <Timer />
        </>
      </Card>
      <CreditBox
        icons={[ ReactIcon, TypeScriptIcon ]}
        link={AUTHOR.githubLink}
        linkText={AUTHOR.name}
      />
    </div>
  );
};

export default App;
