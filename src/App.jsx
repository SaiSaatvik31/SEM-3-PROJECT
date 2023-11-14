import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./Login-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-full h-screen container">
        <div className="d-flex flex-row">
          <div className="imageContainer">
            <img src={logo} className="w-50" alt="Description of the image" />
          </div>
          <div>
            <h1>Welcome Back Doctor</h1>
            <p>Lets get you logged in</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
