import ACTIONS from "../configs/ACTIONS";

interface ActionInterface {
  type: ACTIONS;
  payload?: any;
}

export default ActionInterface;
