import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CreatePlant } from "./sysPlant/CreatePlant";

const Routes = () => (
  <Switch>
    <Route exact path="/CreatePlant" component={CreatePlant}>
      {/* <PlantForm /> */}
    </Route>
  </Switch>
);

export default Routes;
