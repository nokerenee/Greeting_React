import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate";

// simpler Comment component with the user info section extracted out into its own component
function Comment(props) {

  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />
      {/* here we pass the author prop down to the UserInfo component */}
      <div className="Comment-text"> {props.text} </div> 
      <FormattedDate date={props.date}/>
    </div>
  );
}

export default Comment;
