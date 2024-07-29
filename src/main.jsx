import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import Layout from './Layout.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
