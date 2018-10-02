import React, { Component } from 'react';

import Notification from './Notification'
import ProjectList from '../project/ProjectList'



class Dashbord extends Component {
  render() {
    return (
      <div className ='dashboard container'>
      <div className='row'>
      <div className='col s12 m6'>
      <ProjectList/>
      </div>
      <div className='col s12 m5 offset-m1'>
      <Notification/>
      </div>
      </div>
     
      </div>

    );
  }
}

export default Dashbord;
