import { SiReact, SiTypescript } from 'react-icons/si';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { BiMinus, BiPlus, BiReset } from 'react-icons/bi';

export const ReactIcon=<SiReact className="bg-black text-cyan-400" />
export const TypeScriptIcon=<SiTypescript className="bg-white text-blue-500" />

export const PlusIcon=<BiPlus />
export const MinusIcon=<BiMinus />

export const PlayIcon=<BsPlayFill />
export const PauseIcon=<BsPauseFill />
export const ResetIcon=<BiReset />

export * as ICONS from './ICONS';
