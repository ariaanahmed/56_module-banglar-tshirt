import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: '/order',
        element: <Order/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
