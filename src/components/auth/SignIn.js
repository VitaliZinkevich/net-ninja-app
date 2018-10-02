import React, { Component } from 'react';

class SignIn extends Component {

    state = {
        email:null,
        password: null,
    }

    handleChange=(e)=>{
        
        this.setState ({[e.target.name]: e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault ();
        console.log (this.state)
    }



  render() {
    return (
    <div className='container'>
    <h2>Sign IN</h2>
    <form onSubmit={this.handleSubmit}>
    
    <div>
    <h5>Email</h5>
    <input 
    name='email'
    type='email'
    onChange={this.handleChange}/>
    </div>

    <div>
    <h5>Password</h5>
    <input 
    name='password'
    type='password'
    onChange={this.handleChange}/>
    </div>

    <div>
        <button type='submit'>Login</button>
    </div>
    </form>
    </div>

    );
  }
}

export default SignIn;
