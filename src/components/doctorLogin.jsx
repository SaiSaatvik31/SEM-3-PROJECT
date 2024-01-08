import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
let doc_num = 2000;
let adm_num = 2000;
function DocLogin() {
  const location = useLocation();
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState("hello");

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
  // useEffect(() => {

  // }, [user]);

  async function loginUser(event) {
    event.preventDefault();
    console.log(user);
    let m_user = "";
    if (user[0] === "D") {
      m_user = `D${doc_num}`;
      doc_num += 1;
    } else if (user[0] === "A") {
      m_user = `A${adm_num}`;
      adm_num += 1;
    }
    const response = await fetch("http://localhost:1337/api/docLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      alert("Login Successfull");
      if (user.startsWith("A")) {
        localStorage.setItem("token", data.user);
        navigate("/admin");
      } else {
        localStorage.setItem("token", data.user);
        navigate("/doctor");
      }
    } else {
      alert("Login unsuccessfull!");
    }
    console.log(data);
  }

  return (
    <>
      <div className="main-container">
        <div className="main-container2">
          <div className="image-container">
            <div className="d-flex flex-column justify-content-end">
              <div className="ml-5 d-flex justify-content-center">
                <img
                  style={{ mixBlendMode: "multiply" }}
                  src="../src/Trustcurelogo-1.png"
                  width="300px"
                  alt="logo"
                />
              </div>
            </div>
            <div className="ml-5 d-flex justify-content-center">
              <img src="../src/Trustcure-nobg.png" alt="logo" />
            </div>
          </div>

          <div className="login-container">
            <h1>Doctor/Admin Login</h1>
            <form onSubmit={loginUser}>
              {/* Existing input for email */}
              <input
                type="text"
                name="userid"
                id="userid"
                required
                placeholder="abc12@gmail.com"
                value={userName}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={(e) => {
                  setUser(e.target.value);
                }}
              />
              {/* Existing input for password */}
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
              <button type="submit">Login</button>
              <p
                style={{
                  marginTop: "8px",
                  marginLeft: "25px",
                  color:
                    message ===
                    "Successfully Logged In.. Redirecting in 2 seconds.."
                      ? "green"
                      : "red",
                }}
              >
                {message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocLogin;
