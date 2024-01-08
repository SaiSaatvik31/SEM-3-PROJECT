import { useState } from "react";
import { useNavigate } from "react-router-dom";
import register from "../styles/register.css";
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
          <div className="login-container">
            <h1>Register</h1>
            <form onSubmit={registerUser}>
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
              <button className="mb-4" type="submit">
                Register
              </button>
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "25px",
                  color:
                    message === "Successfully Registered!" ? "green" : "red",
                }}
              >
                {message}
              </p>
              <p className="text-center m-2">Already Have an Account?</p>
              {/* Link to login page */}
              <button className="mt-3" onClick={() => navigate("/login")}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
