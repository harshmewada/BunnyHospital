import React from "react";
import { Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import UtilComponent from "./UtilComponent";
import { Dashboard } from "../pages/Dashboard";

const Routes = () => {
  return (
    <div>
      <UtilComponent />
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Dashboard} />
    </div>
  );
};

export default Routes;
