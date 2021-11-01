import { ReactElement } from "react";
import { SiReact, SiTypescript } from "react-icons/si";
import Store from "./Store";
import updateSessionLength from "./actions/updateSessionLength";
import updateBreakLength from "./actions/updateBreakLength";
import Card from "./components/Card";
import CreditBox from "./components/CreditBox";
import Timer from "./components/Timer";
import TimerLength from "./components/TimerLength";
import useGlobalState from "./hooks/useGlobalState";
import Container from "./components/Container";

const App = () : ReactElement => {
  const [state] = useGlobalState();

  return (
    <Store>
      <Container>
        <>
          <Card title="Pomodoro Clock">
            <>
              <div className="flex">
                <TimerLength
                  label="Session Length"
                  timerLength={state.sessionLength}
                  setTimerLength={updateSessionLength}
                />
                <TimerLength
                  label="Break Length"
                  timerLength={state.breakLength}
                  setTimerLength={updateBreakLength}
                />
              </div>
              <Timer />
            </>
          </Card>
          <CreditBox
            icons={[<SiReact />, <SiTypescript />]}
            link="https://www.github.com/harmonify"
            linkText="Wendy"
          />
        </>
      </Container>
    </Store>
  );
};

export default App;
