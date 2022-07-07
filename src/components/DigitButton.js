import { initialState } from "../App";

export default function DigitButton(props) {
  return (
    <button
      onClick={() => {
        // props.(initialState.currentOperand);
      }}
    >
      {props.digit}
    </button>
  );
}

// onClick={() => {
//   if (state.overwrite) {
//     return {
//       ...state,
//       currentOperand: digit,
//       overwrite: false,
//     };
//   }

//   //taking care of leading zeros
//   else if (digit === "0" && currentOperand === "0") {
//     return state;
//   }
//   //taking care of multiple decimals. aka if you press a period and press period again
//   else if (digit === "." && currentOperand.includes(".")) {
//     return state;
//   }
//   return {
//     ...state,
//     currentOperand: `${state.currentOperand || ""}${digit}`,
//   };
// }}
