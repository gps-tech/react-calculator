import { ACTIONS } from "../App";

export default function AllClearButton({ dispatch }) {
  return (
    <button
      className="span-two"
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
    // case ACTIONS.EVALUATE:
    //   if (
    //     state.operation == null ||
    //     state.currentOperand == null ||
    //     state.previousOperand == null
    //   ) {
    //     return state;
    //   }

    //   return {
    //     ...state,
    //     overwrite: true,
    //     previousOperand: null,
    //     operation: null,
    //     currentOperand: evaluate(state)
    //   };
    // default:
    // //NA
  );
}
