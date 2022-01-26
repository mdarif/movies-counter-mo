// Controlled component
/**
 * A Controlled Component is one that takes its current value through props and notifies changes
 * through callbacks like onChange. A parent component "controls" it by handling the callback and
 * managing its own state and passing the new values as props to the controlled component.
 * You could also call this a "dumb component"
 */

// Input: liked: boolean
// Output: Raise an onClick event

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClickToggle}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
