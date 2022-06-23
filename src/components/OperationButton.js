export default function OperationButton({ dispatch, operation }) {
  return (
    <button
    // onClick={
    //   () =>
    //   // //this allows us to stop the operation buttons from doing anything when there is nothing in the current or prev operand
    //   // if (state.currentOperand == null && state.previousOperand == null) {
    //   //   return state;
    //   // }

    //   // if (state.currentOperand == null) {
    //   //   return {
    //   //     ...state,
    //   //     operation: payload.operation
    //   //   };
    //   // }

    //   // //when pressing an operation and there is no previous operand, we make the current operand the prev operand and appending the operation
    //   // if (state.previousOperand == null) {
    //   //   return {
    //   //     ...state,
    //   //     operation: payload.operation,
    //   //     previousOperand: state.currentOperand,
    //   //     currentOperand: null
    //   //   };
    //   // }

    //   // return {
    //   //   ...state,
    //   //   previousOperand: evaluate(state),
    //   //   operation: payload.operation,
    //   //   currentOperand: null
    //   // };
    // }
    >
      {operation}
    </button>
  );
}
