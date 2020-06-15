import React from "react";
import { Route, Switch } from "react-router-dom";

import Listings from "./pages/Listings";
import Home from "./pages/Home";

import DropDownSelect from "./components/DropDownSelect";
const dropdownOptions = [
  {
    name: "Opt 1",
    value: 1
  },
  {
    name: "Opt 1",
    value:2
  },
  {
    name: "Opt 3",
    value: 3
  },
  {
    name: "Opt 4",
    value: 4
  },
  {
    name: "Opt 5",
    value:5
  },
  {
    name: "Opt 6",
    value: 6
  },
  {
    name: "Opt 4",
    value: 7
  },
  {
    name: "Opt 5",
    value: 8
  },
  {
    name: "Opt 6",
    value: 9
  },


]


const DashRoutes = () => {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="mock-page">
            <h3>Render Main Dashboard screen here</h3>
          </div>
          {//<Home />
}
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
            <DropDownSelect 
              entities={dropdownOptions} 
              onSelect={() => console.log("selection functionality here")} 
              close={() => console.log("manage display through state")}
            />
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default DashRoutes;
