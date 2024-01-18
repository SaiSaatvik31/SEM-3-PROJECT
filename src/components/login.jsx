import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleValidation = () => {
    if (userName !== "" && password !== "") {
      setMessage("Successfully Logged In.. Redirecting in 2 seconds..");
    } else {
      setMessage("Invalid Credentials..Please Check again!");
    }
  };
  // const handleLogin = () => {
  //   navigate("/loginPage");
  // };
  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login Successfull");
      navigate("/home");
    } else {
      alert("Login unsuccessfull!");
    }
    console.log(data);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md flex">
        <div className="flex-shrink-0 mr-6">
          <img
            className="w-16 h-16 object-contain"
            src="../src/Trustcurelogo-1.png"
            alt="logo"
          />
          <img
            className="w-12 h-12 mt-4 object-contain"
            src="../src/Trustcure-nobg.png"
            alt="logo"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-6">Login</h1>
          <form onSubmit={loginUser} className="flex flex-col space-y-4">
            <input
              type="email"
              name="userid"
              id="userid"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
            <p
              className={`mt-2 text-sm ${
                message ===
                "Successfully Logged In.. Redirecting in 2 seconds.."
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
