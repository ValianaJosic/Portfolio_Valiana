import React, { Component, Fragment } from 'react';
import '../nav/nav.css'
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class Nav extends Component {

    constructor() {
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'

        }
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={40}
                height={15}
                strokeWidth={4}
                rotate={0}
                color='#82C0CC'
                borderRadius={0}
                animationDuration={0.5}
            />
        )
    }

    displayNavBar = () => {
        return (
            <ul className='nav'>
                <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
                <li className='nav-link'><NavLink to='/projects'>Projects</NavLink></li>
                <li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className='hamburgerDropDown'>
                <li className='nav-link'><NavLink to='/' className='nav-name'>Home</NavLink></li>
                <li className='nav-link'><NavLink to='/projects' className='nav-name'>Projects</NavLink></li>
                <li className='nav-link'><NavLink to='/contact' className='nav-name'>Contact</NavLink></li>
                <li className="nav-link"><a href="https://www.linkedin.com/in/valiana-josic/" target="_blank" rel="noopener  noreferrer" className="nav-name">
                    <i className="fa fa-linkedin"></i>
                </a></li>
            </ul>
        )
    }

    render() {
        return (
            <Fragment>
                <div className='name'>
                    <span className='dev'>Valiana Josic</span>
                    <br></br>
                    <span classname='dev-name'>Web Developer</span>
                </div>
                <div className='navbar'>
                    {this.state.open ? this.displayMobileMenu() : null}
                    {this.displayHamburgerMenu()}
                </div>
            </Fragment>
        );
    }
}


export default Nav
