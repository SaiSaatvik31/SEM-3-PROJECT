import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './styles/login.css'
import LoginPage from './components/LoginPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Appointment from './components/Appointment.jsx'
import Home from './components/Home.jsx'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<LoginPage/>,
    },
    {
      path:'home',
      element:<Layout/>,
      children:[
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'book-appointment',
          element:<Appointment/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
