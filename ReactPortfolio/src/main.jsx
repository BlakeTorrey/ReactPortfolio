import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import App from './App';
import ErrorPage from './components/pages/ErrorPage';
import AboutPage from './components/pages/aboutme';
import PortfolioPage from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
