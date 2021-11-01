import ActionInterface from "./ActionInterface";

interface ActionCreatorInterface<T = void> {
  (arg : T) : ActionInterface;
}

export default ActionCreatorInterface;
