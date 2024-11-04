import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/Register";
import Layout from "./Components/Layout";
import Loader from './Components/Loader'; // Import the Loader component
import React, { useState, useEffect } from 'react';
import NewLogin from "./Components/NewLogin"; // Import NewLogin component

function App() {
  // Define routes with `createBrowserRouter`
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/newlogin",
      element: <NewLogin /> 
    }
  ]);

  // State for loading screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
