import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DecimalButton from "./components/DecimalButton";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import AllClearButton from "./components/AllClearButton";
import DeleteButton from "./components/DeleteButton";
import EvaluateButton from "./components/EvaluateButton";

//placing the actions in a global object
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  DECIMAL: "decimal",
};

export const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

// <-------------------------------------MATH LOGIC------------------------------------------------->
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }

  return computation.toString();
}
// <-------------------------------------END MATH LOGIC--------------------------------------------->

// const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
//   maximumFractionDigits: 0
// });
// function formatOperand(operation) {
//   if (operation == null) return;
//   const [integer, decimal] = operation.split(".");
//   if (decimal == null) return INTEGER_FORMATTER.format(integer);
//   return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
// }

function App() {
  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
  //   reducer,
  //   {}
  // );

  const [state, setState] = useState(initialState);
  // const [previousOperand, setPreviousOperand] = useState();
  // const [operation, setOperation] = useState();

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {/* inserting the state variables destructured from useReducer in the const above */}
          {formatOperand(state.previousOperand)} {operation}
        </div>
        <div className="current-operand">
          {formatOperand(state.currentOperand)}
        </div>
      </div>
      <AllClearButton clearState={() => setState(initialState)} />
      <DeleteButton
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <OperationButton
        operation="÷"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton digit="1" setState={setSa} />
      <DigitButton
        digit="2"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="3"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <OperationButton
        operation="*"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="4"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="5"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="6"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <OperationButton
        operation="+"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="7"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="8"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="9"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <OperationButton
        operation="-"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DecimalButton
        decimal="."
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <DigitButton
        digit="0"
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
      <EvaluateButton
        setCurrentOperand={setCurrentOperand}
        setPreviousOperand={setPreviousOperand}
        setOperation={setOperation}
      />
    </div>
  );
}

export default App;
