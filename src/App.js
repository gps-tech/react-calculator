import { useState } from "react";
import DecimalButton from "./components/DecimalButton";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import AllClearButton from "./components/AllClearButton";
import DeleteButton from "./components/DeleteButton";
import EvaluateButton from "./components/EvaluateButton";
import "./App.css";

export const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

// <-------------------------------------MATH LOGIC------------------------------------------------->
// function evaluate({ currentOperand, previousOperand, operation }) {
//   const prev = parseFloat(previousOperand);
//   const current = parseFloat(currentOperand);
//   if (isNaN(prev) || isNaN(current)) return "";
//   let computation = "";
//   switch (operation) {
//     case "+":
//       computation = prev + current;
//       break;
//     case "-":
//       computation = prev - current;
//       break;
//     case "*":
//       computation = prev * current;
//       break;
//     case "÷":
//       computation = prev / current;
//       break;
//   }

//   return computation.toString();
// }
// <-------------------------------------END MATH LOGIC--------------------------------------------->

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operation) {
  if (operation == null) return;
  const [integer, decimal] = operation.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function App() {
  const [state, setState] = useState(initialState);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {/* inserting the state variables destructured from useReducer in the const above */}
          {/* {formatOperand(state.previousOperand)} {operation} */}
        </div>
        <div className="current-operand">
          {formatOperand(state.currentOperand)}
        </div>
      </div>
      <AllClearButton clearState={() => setState(initialState)} />
      <DeleteButton />
      <OperationButton operation="÷" />
      <DigitButton digit="1" />
      <DigitButton digit="2" setState={setState} state={state} />
      <DigitButton digit="3" setState={setState} state={state} />
      <OperationButton operation="*" />
      <DigitButton digit="4" setState={setState} state={state} />
      <DigitButton digit="5" setState={setState} state={state} />
      <DigitButton digit="6" setState={setState} state={state} />
      <OperationButton operation="+" />
      <DigitButton digit="7" setState={setState} state={state} />
      <DigitButton digit="8" setState={setState} state={state} />
      <DigitButton digit="9" setState={setState} state={state} />
      <OperationButton operation="-" />
      <DecimalButton decimal="." />
      <DigitButton digit="0" setState={setState} state={state} />
      <EvaluateButton digit="=" />
    </div>
  );
}

export default App;
