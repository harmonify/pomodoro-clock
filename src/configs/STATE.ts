import StateInterface from "../interfaces/StateInterface";
import { SESSION, SIXTY_SECONDS } from "./CONSTANTS";

/*
 * Break timer state configuration 
 */
const INITIAL_BREAK_LENGTH = 5;
export const MIN_BREAK_LENGTH = 1;
export const MAX_BREAK_LENGTH = 60;

/*
 * Session timer state configuration 
 */
const INITIAL_SESSION_LENGTH = 25;
export const MIN_SESSION_LENGTH = 1;
export const MAX_SESSION_LENGTH = 60;

/*
 * Initial state configuration
 */
const INITIAL_IS_TIMER_RUNNING = false;
const INITIAL_TIMER_TYPE = SESSION;
const INITIAL_TIMER_LENGTH = SIXTY_SECONDS * INITIAL_SESSION_LENGTH;
const INITIAL_AUDIO_CURRENT_TIME = 0;

export const INITIAL_STATE : StateInterface = {
  breakLength: INITIAL_BREAK_LENGTH,
  sessionLength: INITIAL_SESSION_LENGTH,
  isTimerRunning: INITIAL_IS_TIMER_RUNNING,
  timerType: INITIAL_TIMER_TYPE,
  timerLength: INITIAL_TIMER_LENGTH,
  audioCurrentTime: INITIAL_AUDIO_CURRENT_TIME,
};

export * as default from "./STATE";
