import StateInterface from "../interfaces/StateInterface";
import { SIXTY_SECONDS } from "./CONSTANTS";

export const INITIAL_STATE : StateInterface = {
  breakLength: 5,
  sessionLength: 25,
  isTimerRunning: false,
  timerType: "session",
  timerLength: SIXTY_SECONDS,
};

export const MIN_BREAK_LENGTH = 1;
export const MAX_BREAK_LENGTH = 60;

export const MIN_SESSION_LENGTH = 1;
export const MAX_SESSION_LENGTH = 60;

export * as default from "./STATE";
