import React from "react";
import { Route, Switch } from "react-router-dom";
import Listings from "./pages/Listings";

const DashRoutes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="mock-page">
            <h3>Render Main Dashboard screen here</h3>
          </div>
        </Route>
        <Route  path="/edit_profile">
          <div className="mock-page">
            <h3>Render edit profile screen here</h3>
          </div>
        </Route>
        <Route path="/my_listings">
          <Listings />
        </Route>
        <Route path="/my_team">
          <div className="mock-page">
            <h3>Render My Team screen here</h3>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default DashRoutes;
