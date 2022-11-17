import React from "react";
import { NavLink } from "react-router-dom";
import {
  AllProducts,
  SingleProduct,
  Cart,
  Home,
  Checkout,
  LogIn,
  Admin,
  ThankYou,
} from "./index";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, logout } from "../reducers/UserSlice";

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);

  let adminPage;
  let loggedIn = (
    <NavLink className={"navLinks"} to="/login">
      Login
    </NavLink>
  );
  if (user) {
    loggedIn = (
      <NavLink
        className={"navLinks"}
        to="/login"
        onClick={() => dispatch(logout())}
      >
        Logout
      </NavLink>
    );
    if (user.username === "admin") {
      adminPage = (
        <NavLink className={"navLinks"} to="/admin">
          Admin
        </NavLink>
      );
    }
  } else {
    {
      loggedIn;
    }
  }

  return (
    <div className="bodyClass">
      <nav className="main-navbar">
        <div className="logo">Logo</div>
        <div>
          <NavLink className={"navLinks"} to="/home">
            Home
          </NavLink>
          {adminPage ? adminPage : ""}
          <NavLink className={"navLinks"} to="/products">
            Shop
          </NavLink>
          {loggedIn}
          <NavLink className={"navLinks"} to="/cart">
            Cart
          </NavLink>
        </div>
      </nav>
      <main>
        <h1 className="main-header"></h1>
        <Routes>
          <Route
            path="/products"
            element={
              <>
                <AllProducts />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <SingleProduct />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LogIn />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Admin />
              </>
            }
          />
          <Route
            path="/ThankYou"
            element={
              <>
                <ThankYou />
              </>
            }
          />
        </Routes>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
