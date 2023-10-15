function Avatar(props) {

  return (
    <img
      className="Avatar"
      src={props.url}
      alt={`${props.alt}'s avatar`}
    />
  );
}

export default Avatar;
