import React from "react";
import {   HashRouter, } from "react-router-dom";


import DashRoutes from "./DashRoutes"
import NavigationBar from "./components/NavigationBar";


const Dashboard = () => {

  return(
    <div className={"dash-wrapper"}>
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
