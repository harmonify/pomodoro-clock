import { ReactElement } from "react";
import Card from "./components/Card";
import CreditBox from "./components/CreditBox";
import Timer from "./components/Timer";
import { AUTHOR } from "./configs/CONSTANTS";
import { ReactIcon, TypeScriptIcon } from "./configs/ICONS";

const App = (): ReactElement => {
  return (
    <div className="container min-w-full min-h-screen space-y-3 bg-red-400 text-white">
      <Card title={["Pomodoro Clock", "🍅"]}>
        <Timer />
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
