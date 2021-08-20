import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import axiosWithAuth from "./helpers/axiosWithAuth";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {

  const {push} = useHistory()

  function handleLogout (){
    axiosWithAuth().post('logout')
      .then(res => {
        localStorage.removeItem('token')
        push('/login')
      })
  }

  return (
    <div className="App">
      <header>
        Color Picker Sprint Challenge
        <a data-testid="logoutButton" href="#" onClick={handleLogout}>logout</a>
      </header>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute route='/bubble-page' component={BubblePage} />
      </Switch>
    </div>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.