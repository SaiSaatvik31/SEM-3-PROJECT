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
import SlotPage from "./components/slotPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/login.jsx";
import OtherDoc from "./components/otherDoc.jsx";
import Doctor from "./components/doctor.jsx";
import Admin from "./components/admin.jsx";
import DocLogin from "./components/doctorLogin.jsx";
import LandingPage from "./components/landingPage.jsx";
import Adv_booking from "./components/adv_booking.jsx";
import BookSelec from "./components/bookSelec.jsx";
import VirtualRoom from "./components/virtualRoom.jsx";
import Cancellation from "./components/cancellation.jsx";
import RecBook from "./components/recBook.jsx";
import Profile from "./components/Profile.jsx";
import OnlineCons from "./components/online_cons.jsx";
import On_cons2 from "./components/on_cons2.jsx";
import InteractiveSVG from "./components/body_model.jsx";
import PatientList from "./components/patientList.jsx";
import Presc_doc from "./components/presc_doc.jsx";
const MainApp = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const updateSelectedOptions = (options) => {
    setSelectedOptions(options);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/docLogin" element={<DocLogin />} />
          <Route path="/recBook" element={<RecBook />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/otherDoctors" element={<OtherDoc />} />
          <Route path="/virtualRoom" element={<VirtualRoom />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/patientList" element={<PatientList />} />
          <Route path="/prescription" element={<Presc_doc />} />

          <Route
            path="/home"
            element={
              <Home
                selectedOptions={selectedOptions}
                updateSelectedOptions={updateSelectedOptions}
              />
            }
          />

          <Route path="/book-appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
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
        </Route>
        <Route
          path="/formPage"
          element={
            <ChipsArray
              selectedOptions={selectedOptions}
              updateSelectedOptions={updateSelectedOptions}
            />
          }
        />

        <Route
          path="/advBook"
          element={
            <Adv_booking
              selectedOptions={selectedOptions}
              updateSelectedOptions={updateSelectedOptions}
            />
          }
        />
        <Route
          path="/onlineConsultation"
          element={
            <OnlineCons
              selectedOptions={selectedOptions}
              updateSelectedOptions={updateSelectedOptions}
            />
          }
        />
        <Route
          path="/bookOnline"
          element={
            <On_cons2
              selectedOptions={selectedOptions}
              updateSelectedOptions={updateSelectedOptions}
            />
          }
        />
        <Route
          path="/bookSelec"
          element={
            <BookSelec
              selectedOptions={selectedOptions}
              updateSelectedOptions={updateSelectedOptions}
            />
          }
        />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/slotPage" element={<SlotPage />} />
        <Route path="/svg" element={<InteractiveSVG />} />
        
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
