import React from "react";
import { NavLink } from "react-router-dom";
import { AllProducts, SingleProduct, Cart, Home, Checkout, LogIn, currentUser} from "./index";
import { Route, Routes } from "react-router-dom";


const Main = () => {
  return (
    <div className="bodyClass">
      <nav className="main-navbar">
        <div className="logo">Logo</div>
        <div>
          <NavLink className={"navLinks"} to="/home">
            Home
          </NavLink>
          <NavLink className={"navLinks"} to="/about">
            About
          </NavLink>
          <NavLink className={"navLinks"} to="/login">
            Login
          </NavLink>
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
        </Routes>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
