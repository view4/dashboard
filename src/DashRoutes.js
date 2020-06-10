import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

import Listings from "./pages/Listings";

const DashRoutes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/">
          "Render Main Dashboard screen here"
        </Route>
        <Route  path="/edit_profile">
          "Render Edit Profile screen here"
        </Route>
        <Route path="/my_listings">
          <Listings />
        </Route>
        <Route path="/my_team">
          "Render My team screen here"
        </Route>
      </Switch>
    </>
  );
};

export default DashRoutes;
