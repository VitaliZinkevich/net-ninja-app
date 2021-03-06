import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import ProjectDetailes from './components/project/ProjectDetailes'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetailes} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />

       

      </Switch>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
