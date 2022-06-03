export default function AllClearButton(props) {
  return (
    <button className="span-two" onClick={props.clearState}>
      AC
    </button>
    //       //returning an empty state when pressing All Clear (AC)
    // case ACTIONS.CLEAR:
    //   return {};
  );
}
