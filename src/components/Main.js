import React from "react";
import { NavLink } from "react-router-dom";
import { AllProducts, SingleProduct, Cart, Home, Checkout, LogIn, Admin} from "./index";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../reducers/UserSlice";


const Main = () => {
  const user = useSelector(currentUser);
  console.log(user);
  let adminPage;
  let loggedIn = <NavLink className={"navLinks"} to="/login">
  Login
</NavLink>;
  if(user ){
    loggedIn=<NavLink className={"navLinks"} to="/home">
    Logout
  </NavLink>;
    if(user.username === 'admin'){
    adminPage = <NavLink className={"navLinks"} to="/admin">
    Admin
  </NavLink>
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
          {adminPage? adminPage:''}
          <NavLink className={"navLinks"} to="/about">
            About
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
        </Routes>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
