import React, { Component } from 'react'
import {MenuItems} from '../AirportAirlineUI/MenuItems'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
        console.log(this.state.clicked)

    }

    

    render() {
        return(
            <nav className='NavbarItems'>
            <Link to='home' className='logo animate__animated animate__fadeIn'>
                <h1 className="navbar-logo">FlyInOz     <FontAwesomeIcon className='plane' icon={faPlane} /> </h1>
            </Link>

                <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className='animate__animated animate__fadeIn'>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} onClick={this.handleClick}>
                                    {item.title} 
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar