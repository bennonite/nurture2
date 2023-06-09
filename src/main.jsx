import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import IdentityIndex from './pages/IdentityIndex.jsx';
import IdentityView from './pages/IdentityView.jsx';
import ValueView from './pages/ValueView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/identity",
        element: <IdentityIndex/>
      },
      {
        path:"/identity/:identityParam",
        element: <IdentityView/>
      },
      {
        path:"/identity/:identityParam/:valueParam",
        element: <ValueView/>
      }
    ]
  },
],
{
  basename:"/nurture2"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
