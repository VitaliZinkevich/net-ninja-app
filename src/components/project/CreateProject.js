import React, { Component } from 'react';
import createProject from '../../store/actions/projectActions'
import {connect} from 'react-redux'

class CreateProject extends Component {

    state = {
        title:null,
        content: null,
    }

    handleChange=(e)=>{
        
        this.setState ({[e.target.name]: e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault ();
        this.props.createProject(this.state)
    }



  render() {
    return (
    <div className='container'>
    <h2>Create new project</h2>
    <form onSubmit={this.handleSubmit}>
    
    <div>
    <h5>Title</h5>
    <input 
    name='title'
    type='text'
    onChange={this.handleChange}/>
    </div>

    <div>
    <h5>Content</h5>
    
    <textarea
    className='materialize-textarea'
    name='content'
    onChange={this.handleChange}
    /> 
    </div>

    <div>
        <button 
        className='waves-effect waves-teal btn-flat'
        type='submit'>Create</button>
    </div>
    </form>
    </div>

    );
  }
}


const mapDispathToProps = (dispath)=>{
    return {
        createProject: (project)=>{
           return dispath(createProject(project))
        }
    }
}

export default  connect(null, mapDispathToProps)(CreateProject);
