import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CreatePlant } from "./sysPlant/CreatePlant";
import { TablePlant } from "./sysPlant/TablePlant";
import { HomeComponent } from "./HomeComponent";

const Routes = () => (
  <Switch>
    <Route exact path="/Home" component={HomeComponent}></Route>
    <Route exact path="/CreatePlant" component={CreatePlant}>
      {/* <PlantForm /> */}
    </Route>
    <Route exact path="/TablePlant" component={TablePlant}></Route>
  </Switch>
);

export default Routes;
