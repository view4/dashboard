import React from "react";
import { HashRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import DashRoutes from "./DashRoutes";

const Dashboard = () => {

  return(
    <div className={"dashboard-wrapper"}>
      <HashRouter>
        <div className={"dashboard-navigation"}>
          <NavigationBar />
        </div>
        <div className={"dashboard-view"}>
          <DashRoutes />
        </div>
      </HashRouter>
    </div>
  )
};


export default Dashboard;
