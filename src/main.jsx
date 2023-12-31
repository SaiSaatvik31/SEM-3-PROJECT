import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Appointment from "./components/Appointment.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Feedback from "./components/Feedback.jsx";
import ForWhom from "./components/forWhom.jsx";
import Name from "./components/name.jsx";
import Age from "./components/Age.jsx";
import Form from "./components/Form.jsx";
import ChipsArray from "./components/Chips.jsx";
import UserInfo from "./components/userInfo.jsx";

const MainApp = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const updateSelectedOptions = (options) => {
    setSelectedOptions(options);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="book-appointment" element={<Appointment />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route
            path="/forWhom"
            element={
              <ForWhom
                selectedOptions={selectedOptions}
                updateSelectedOptions={updateSelectedOptions}
              />
            }
          />
          <Route
            path="/name"
            element={
              <Name
                selectedOptions={selectedOptions}
                updateSelectedOptions={updateSelectedOptions}
              />
            }
          />
          <Route
            path="/Age"
            element={
              <Age
                selectedOptions={selectedOptions}
                updateSelectedOptions={updateSelectedOptions}
              />
            }
          />
          <Route
            path="/formPage"
            element={
              <ChipsArray
                selectedOptions={selectedOptions}
                updateSelectedOptions={updateSelectedOptions}
              />
            }
          />
        </Route>
        <Route path="/userInfo" element={<UserInfo />} />
      </>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);
