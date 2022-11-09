import React from "react";
import { NavLink } from "react-router-dom";
import { AllProducts, SingleProduct } from "./index";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  // const items = useSelector();
  // const itemCount = items.length;
  return (
    <div>
      <nav className="main-navbar">
        <div>
          <NavLink className={"home"} to="/products">
            Home
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
