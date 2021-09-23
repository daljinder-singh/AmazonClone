import React from 'react'
import Dashboard from '../component/dashboard/Dashboard'
import Card from '../component/card/Card';
import { Switch, Route } from "react-router-dom";

const Switchs = () =>{
    return(
        <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/:id">
          <Card />
        </Route>
      </Switch>
    )
}
export default Switchs