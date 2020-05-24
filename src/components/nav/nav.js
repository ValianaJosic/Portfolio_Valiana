import React, { Component, Fragment } from 'react';
import '../nav/nav.css'
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
                <li className='nav-link'><a href='/' >Home</a></li>
                <li className='nav-link'><a href='/projects'>Projects</a></li>
                <li className='nav-link'><a href='/contact'>Contact</a></li>
            </ul>
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className='hamburgerDropDown'>
                <li className='nav-link'><a href='/' className='nav-name'>Home</a></li>
                <li className='nav-link'><a href='/projects' className='nav-name'>Projects</a></li>
                <li className='nav-link'><a href='/contact' className='nav-name'>Contact</a></li>
                <li className="nav-link"><a href="https://www.linkedin.com/in/valiana-josic/" target="_blank" rel="noopener  noreferrer" className="nav-name">
                    <i className="fa fa-linkedin"></i> LinkedIn
                </a></li>
                <li className="nav-link"><a href="https://github.com/ValianaJosic" target="_blank" rel="noopener  noreferrer" className="nav-name">
                    <i class="fa fa-github" aria-hidden="true"></i> GitHub
                </a></li>
            </ul>
        )
    }

    render() {
        return (
            <Fragment>
                <div className='name'>
                    <span className='dev'>Valiana Josic</span>
                    <div></div>
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
