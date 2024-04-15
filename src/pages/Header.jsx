import React from 'react'
import './header.css'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <div id='header'>
        <div>
            <h3><span style={{color:"red"}}>EpicEstate</span>Hub</h3>
        </div>

        <div>
        <Form.Control id='sbtn' type="text" placeholder="Search Here..." readOnly />
        </div>
        <div id='spandiv'>
            <span>Home</span>
            <span>About</span>
            <Link to={'/login'}style={{textDecoration:'none'}}><span>Sign In</span></Link>
        </div>


    </div>
    </>
  )
}

export default Header