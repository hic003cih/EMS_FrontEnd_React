import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { CreatePlant } from "./sysPlant/CreatePlant";
import { IndexPlant } from "./sysPlant/IndexPlant";
import { EditComponent } from "./sysPlant/EditPlant";
import { HomeComponent } from "./HomeComponent";

const Routes = () => (
  <Switch>
    <Route exact path="/Home" component={HomeComponent}></Route>
    <Route exact path="/CreatePlant" component={CreatePlant}>
      {/* <PlantForm /> */}
    </Route>
    <Route exact path="/IndexPlant" component={IndexPlant}></Route>
    <Route path="/edit/:id" component={EditComponent}></Route>
  </Switch>
);

export default Routes;
