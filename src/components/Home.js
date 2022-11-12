import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-body">
        <h2>Collections</h2>
        <div className="collections">
          <div className="collection">10 oz. Ringneck</div>
          <div className="collection">12 oz. Wine Tumbler</div>
          <div className="collection">15 oz. Camp Mug</div>
          <div className="collection">20 oz. Ringneck</div>
          <div className="collection">30 oz. Ringneck</div>
          <div className="collection">32 oz Water Bottle</div>
        </div>
      </div>
    </>
  );
};
export default Home;
