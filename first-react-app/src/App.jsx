import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import JsxElement from "./components/Greeting";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Address from "./components/Address";
import Pet from "./components/Pet";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import MoviesList from "./components/MoviesList";
import BigCats from "./components/BigCats";
import MoodChanger from "./components/MoodChanger";
import Emoji from "./components/Emoji";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";
import ExplodingBomb from "./components/ExplodingBomb";
import Calculator from "./components/Calculator";

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome componentBox">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>
        Welcome {props.name}!
      </h3>{" "}
      {/* style object directly in JSX */}
      {/* if this component has children, render them here */}
      {props.children}{" "}
    </div>
  );
}

const spiderman = {
  name: "Spiderman",
  alterEgo: "Peter Parker",
  catchPhrase: "With great power comes great responsibility",
};

// single parent <div> element
const SpideyJSX = (props) => {
  return (
    <div>
      {"a placeholder for JS"}
      <h3>{spiderman.name}</h3> <blockquote>{spiderman.catchPhrase}</blockquote>{" "}
      <cite>{spiderman.alterEgo}</cite> {props.children}{" "}
    </div>
  );
};

// This creates a new component as a function that returns some JSX.
// Add this in App.jsx ABOVE the App component
function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      {" "}
      <h1>My Example Component</h1> <p>My first React component!</p>{" "}
    </div>
  );
}

// object storing comment data - passed as props
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

const divStyle = {
  background: "lightblue",
  padding: "1em",
  fontWeight: "bold",
};

function FancyBox(props) {
  return (
    <div className={"FancyBox FancyBox-" + props.color}>
      {props.children}  {/* everything in between the opening <FancyBox> and closing </FancyBox> tags */}
    </div>
  );
}  

function Callout(props) {
  return (
    <FancyBox color="blue">
      <h1 className="Callout-title">{props.title}</h1>
      <p className="Callout-message">{props.message}</p> {props.children}{" "}
      {/* everything in between the opening <Callout> and closing </Callout> tags */}{" "}
    </FancyBox>
  );
} 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <JsxElement name="Nicole"></JsxElement>
      {/* Renders the Welcome component with a name prop and a child (nested) element */}
      <Welcome name="students">
        {" "}
        <p>Children of Welcome</p>{" "}
      </Welcome>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SpideyJSX name="fun fact">
        <p>Spidey is neat</p>
      </SpideyJSX>
      <div style={divStyle}>This is a styled div.</div>{" "}
      {/* style object as a variable - neater and re-usable */}{" "}
      <ExampleComponent></ExampleComponent>
      {/* This renders the component, calling the function and including its JSX output at this point in the code. Add this INSIDE the return block of the App component. */}
      <PropsDisplayer /> {/* Renders the component with no props */}
      <PropsDisplayer myProp="first prop" />{" "}
      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />{" "}
      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer name="Harry Styles" age={29} />{" "}
      {/* String prop value uses quotes, numeric prop value uses curly braces */}
      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />{" "}
      {/* Array prop value - uses curly braces */}
      <PropsDisplayer reactLogo={reactLogo} buttonCount={count} />{" "}
      {/* Variable prop values - uses curly braces */}
      {/* state and country are not specified, will use defaults */}
      <City name="Sydney" />
      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />
      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />
      {/* Everything in between <City> and </City> is passed as props.children */}
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>
      <Address />
      <Address street="Valentine Street" />
      <Pet type="Weasel" name="Julia" colour="white" />
      <FullName first="Chris" middle="P." last="Bacon" />
      {/* render the component, passing object data as props */}
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      <MoviesList/>
      <BigCats/>
      <MoodChanger/>
      <Emoji/>
      <BirthdayTranslator/>
      <Weather/>
      <LoginForm/>
      <ExplodingBomb/>
      <Calculator/>
    </>
  );
}

export default App;
