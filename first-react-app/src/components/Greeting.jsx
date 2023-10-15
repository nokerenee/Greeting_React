// Exercise 1:

// standard JSX syntax for creating an element - render with {jsxElement}
const JsxElement = (props) => {
    let name = "World";
    if (props.name) name = props.name;
  return (
    <div>
      <h1 className="greeting">Hello {name}</h1>
      {props.children}
    </div>
  );
};

export default JsxElement;
