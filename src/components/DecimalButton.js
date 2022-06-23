export default function DecimalButton({ dispatch, decimal }) {
  return (
    //the button calls the ADD_DIGIT function and it's passing along the digit
    <button>{decimal}</button>
  );
}
