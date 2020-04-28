import React from 'react';
import { NavLink } from 'react-router-dom';
import '../action-btn/action-btn.css';


function Actionbtn() {

    return (
        <div className="action-btn">
            <NavLink to='/projects' className='home-btn'>Projects</NavLink>
        </div>
    )
};

export default Actionbtn;