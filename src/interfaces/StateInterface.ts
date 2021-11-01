interface StateInterface {
  timerLength: number;        // in seconds
  isTimerRunning: boolean;
  timerType: string;
  breakLength: number;        // in minutes
  sessionLength: number;      // in minutes
}

export default StateInterface;
