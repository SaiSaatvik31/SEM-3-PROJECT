import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.jsx";
import logo from "./Login-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row">
            <div className=" col-6 imageContainer">
              <img
                src={logo}
                className={styles.imgContainer}
                alt="Description of the image"
              />
            </div>
            <div className={`${styles.infoContainer} bg-green-600 col-6`}>
              <div className="text-white text-center">
                <h3 className="text-4xl">Welcome Back Doctor!</h3>
                <p className="text-2xl">Lets get you logged in</p>
                <input
                  type="text"
                  className="m-5 w-50 h-10"
                  placeholder="Enter UserName or Email"
                />
                <br />
                <input
                  className="m-5 w-50 h-10"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="bottomDiv text-white text-center">
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <input type="checkbox" id="rememberMe" />
                    <label for="rememberMe">Remember Me</label>
                  </div>
                  <div>
                    <a target="_blank" href="www.google.com">
                      Need Help?
                    </a>
                  </div>
                </div>
                <button className="w-full btn btn-primary">Submit</button>
                <p>Alternative Options</p>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <button className="btn btn-info">Login With Google</button>
                  </div>
                  <div>
                    <button className="btn btn-info">
                      Login With FaceBook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
