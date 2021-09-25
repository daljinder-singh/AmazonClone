import React from 'react'
import Dashboard from '../component/dashboard/Dashboard'
import Card from '../component/card/Card'
import Login from '../component/Login'
import SaveproductList from '../component/SaveproductList'
import { Switch, Route } from "react-router-dom";
import Registration from '../component/Registration'

const Switchs = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/product/:id">
        <Card />
      </Route>
      <Route exact path="/saveproductList">
        <SaveproductList />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registration">
        <Registration />
      </Route>
    </Switch>
  )
}
export default Switchs