import React from "react";
import {   NavLink } from "react-router-dom";

const NavigationBar = () => {

  return(
    <div className={"navbar-container"}>
      <NavLink activeClassName="active-navlink" to="/" exact>
        <div className={"navlink-wrapper"}>
          <span>
            <img
              src={require("../assets/icons/dashboard.png")}
              className="navlink-icon"
            />
            Dashboard
         </span>
        </div>        
      </NavLink>
      <NavLink activeClassName="active-navlink" to="/edit_profile">
        <div className={"navlink-wrapper"}>
          <span>
          <img
            src={require("../assets/icons/edit_profile.png")}
            className="navlink-icon"
          />
          Edit Profile
          </span>
        </div>
      </NavLink>
      <NavLink activeClassName="active-navlink" to="/my_listings">
        <div className={"navlink-wrapper"}>
          <span>
          <img
            src={require("../assets/icons/listings.png")}
            className="navlink-icon"
          />
          My Listings
          </span>
        </div>
      </NavLink>
      <NavLink activeClassName="active-navlink" to="/my_team">
        <div className={"navlink-wrapper"}>
          <span>
          <img
            src={require("../assets/icons/team.png")}
            className="navlink-icon"
          />
          My Team
          </span>
        </div>
      </NavLink>
    </div>
  )
};

export default NavigationBar;
