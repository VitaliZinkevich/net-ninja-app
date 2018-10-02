import React from 'react'

const ProjectDetailes = (props)=>{
    let id = props.match.params.id
    console.log (props)
    return (
        <div className='container section project-detailes'>
        
        <div className='card z-depth-0'>
        <div className='card-content'>
        <span className='card-title'>Project Title - {id}</span>
        <p>lorem</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
        <div>Posted by Vitali</div>
        <div>2nd September, 2am</div>
        </div>

        
        </div>
        </div>
    )
}

export default ProjectDetailes