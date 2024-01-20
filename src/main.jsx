import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Auth from "./Pages/Auth.jsx";
import Login from "./components/Login/Login.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Menu from "./Pages/Menu.jsx";
import { Toaster } from "react-hot-toast";
import Cart from "./Pages/Cart.jsx";
import Contact from "./Pages/Contact.jsx";
import Orders from "./Pages/Orders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className=" bg-black">
        <AuthLayout>
          <Toaster />
          <Header />
          <Outlet />
          <Footer />
        </AuthLayout>
      </div>
    ),
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "auth",
        element: (
          <Auth>
            <Outlet />
          </Auth>
        ),
        children: [
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
