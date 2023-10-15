function PropsDisplayer(props) {
  // convert object to string
  const stringProps = JSON.stringify(props);
  return (
    <div className="PropsDisplayer componentBox">
      {" "}
      <h2>Check out my props!</h2> <h3>{stringProps}</h3>
      {/* what happens if we try to render the object {props} ? */}
      {/* Place this inside the return block of PropsDisplayer to access and display individual props */}
      <p>
        Name: {props.name} is {props.age} years old
      </p>
    </div>
  );
}
// export this component so we can import it elsewhere
export default PropsDisplayer;
