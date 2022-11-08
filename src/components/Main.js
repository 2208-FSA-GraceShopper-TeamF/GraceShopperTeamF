import React from "react";
import { NavLink } from "react-router-dom";
import { AllExamples } from "./index";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../reducers/cartSlice";

const Main = () => {
  const items = useSelector(selectCart);
  const itemCount = items.length;
  return (
    <div>
      <nav className="main-navbar">
        <div>
          <NavLink className={"home"} to="/examples">
            Home
          </NavLink>
        </div>
      </nav>
      <main>
        <h1 className="main-header"></h1>
        <Routes>
          <Route
            path="/examples"
            element={
              <>
                <AllExamples />
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
