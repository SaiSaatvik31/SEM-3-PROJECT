import React from "react";
import ReactDOM from "react-dom/client";
// // import App from './App.jsx'
// // import './index.css'
// // import './styles/login.css'
// import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
// import Appointment from './components/Appointment.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Feedback from './components/Feedback.jsx'
// import ChipComponent from './components/Chips.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path='book-appointment' element={<Appointment/>}>
//         <Route path='form' element={<ChipComponent/>}/>
//       </Route>
//       <Route path='about' element={<About/>}/>

//       <Route path='feedback' element={<Feedback/>}/>
//       </Route>
//   ))


      
 import "./index.css";
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
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="book-appointment" element={<Appointment />} />
      <Route path="about" element={<About />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="/forWhom" element={<ForWhom />} />
      <Route path="/name" element={<Name />} />
      <Route path="/Age" element={<Age />} />
      <Route path="/formPage" element={<ChipsArray />} />
    </Route>
  )
); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
