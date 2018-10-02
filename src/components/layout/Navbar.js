import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignOutLiks from './SignedOutLinks'


const Navbar = () =>{
    return (
        <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
        <Link to='/' className='brand-log'>MarioPlan</Link>
        <SignedInLinks></SignedInLinks>
        <SignOutLiks></SignOutLiks>

        </div>
        
        </nav>
    )
}

export default Navbar