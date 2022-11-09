import React from "react";
import { NavLink } from "react-router-dom";
import { AllProducts, SingleProduct } from "./index";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  // const items = useSelector();
  // const itemCount = items.length;
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
        </Routes>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
