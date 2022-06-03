import { ACTIONS } from "../App";

export default function DigitButton({
  digit,
  setCurrentOperand,
  setPreviousOperand,
  setOperation,
}) {
  return (
    //the button calls the ADD_DIGIT function and it's passing along the digit
    <button
      onClick={() => {
        if (state.overwrite) {
          return {
            ...state,
            currentOperand: digit,
            overwrite: false,
          };
        }

        //taking care of leading zeros
        else if (digit === "0" && currentOperand === "0") {
          return state;
        }
        //taking care of multiple decimals. aka if you press a period and press period again
        else if (digit === "." && currentOperand.includes(".")) {
          return state;
        }
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${digit}`,
        };
      }}
    >
      {digit}
    </button>
  );
}
