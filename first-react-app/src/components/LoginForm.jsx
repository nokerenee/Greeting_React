import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState(""); // new state value for showing submission messages to user
  const [remainingAttempts, setRemainingAttempts] = useState(3); // Set the maximum number of attempts
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    // Regular expression for a simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // add some password validation
    if (!emailRegex.test(userEmail)) {
      setSubmitResult("Invalid email address");
    } else if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      if (remainingAttempts > 1) {
        setSubmitResult(
          "Incorrect password. Remaining attempts: " + (remainingAttempts - 1)
        );
        setRemainingAttempts(remainingAttempts - 1);
      } else {
        setSubmitResult("Account locked. Please contact support.");
        setLoggedIn(true); // Lock the account
      }
    }
  };

  const isFormDisabled = remainingAttempts === 0 || loggedIn; // Disable the form when remainingAttempts is 0

  return (
    <div className="LoginForm componentBox">
      {loggedIn ? (
        <p>{submitResult}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              Email Address:
              {/* Controlled form element needs both value and onChange. onChange handler uses event param e to access target value. Whenever user types, new value is stored in state. */}
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
                disabled={isFormDisabled}
              />
            </label>
          </div>
          {/* same form code as previously, BUT now includes <form> and <button> */}
          <button type="submit" disabled={isFormDisabled}>
            Log In
          </button>
        </form>
      )}
      {!loggedIn && <p>{submitResult}</p>} {/* Display the error messages for non-locked accounts */}
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
