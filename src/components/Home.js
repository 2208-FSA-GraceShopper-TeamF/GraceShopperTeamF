import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={"collections"}>
        <div className={"hiro-img"}>
          <img className="{hiro-img}" src={""}></img>
          <NavLink to="/products">
            <button>Shop Now</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Home;
