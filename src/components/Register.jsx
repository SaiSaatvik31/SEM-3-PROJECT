import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        navigate("/login");
      }
      console.log(data);
      setMessage("Successfully Registered!");
      // Redirect to login page after registration
      // setTimeout(() => {
      //   navigate("/loginPage");
      // }, 2000);
    } catch (error) {
      setMessage("Registration Failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container2">
          {/* ... (other elements remain unchanged) ... */}
          <div className="login-container">
            <h1>Register</h1>
            <form onSubmit={registerUser}>
              {/* Input for username */}
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder="Username"
                value={name}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              {/* Input for email */}
              <input
                type="email"
                name="userid"
                id="userid"
                required
                placeholder="abc12@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* Input for password */}
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* Register button */}
              <button type="submit">Register</button>
              <p
                style={{
                  marginTop: "8px",
                  marginLeft: "25px",
                  color:
                    message === "Successfully Registered!" ? "green" : "red",
                }}
              >
                {message}
              </p>
              <p>Already Have an Account?</p>
              {/* Link to login page */}
              <button onClick={() => navigate("/login")}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
