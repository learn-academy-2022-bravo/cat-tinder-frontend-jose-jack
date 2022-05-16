import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import {Nav,NavItem} from 'reactstrap'

class Header extends Component {
    render() {
        return (
            <Nav pills>
                <NavItem>
                    <NavLink className="nav-link"
                        active
                       to="/"
                    >
                        Home
                    </NavLink>
                </NavItem>
            
                <NavItem>
                    <NavLink className="nav-link" to="/reptileindex">
                        Reptiles
                    </NavLink>
                </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to="/reptilenew">
                        New Profile
                    </NavLink>
                </NavItem>

</Nav>
        )
    }
}

export default Header;