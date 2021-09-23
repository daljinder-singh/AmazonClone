import React from 'react'
import Dashboard from '../component/dashboard/Dashboard'
import Card from '../component/card/Card'
import Login from '../component/Login'
import SaveproductList from '../component/SaveproductList'
import { Switch, Route } from "react-router-dom";

const Switchs = () =>{
    return(
        <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path = "/saveproductList">
          <SaveproductList />
        </Route>
        <Route exact path = "/login">
          <Login />
        </Route>
        <Route exact path="/:id">
          <Card />
        </Route>
      </Switch>
    )
}
export default Switchs