import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PlantForm } from "./sysPlant/CreatePlant";

const Routes = () => (
  <Switch>
    <Route exact path="/Plant" component={PlantForm}>
      {/* <PlantForm /> */}
    </Route>
  </Switch>
);

export default Routes;
