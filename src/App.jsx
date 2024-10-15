import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Home />,
    },
    {
      path: "/login",
      element: <h1>Login Page</h1>,
    },
    {
      path: "/signup",
      element: <h1>Sign Up Page</h1>,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
