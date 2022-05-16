import React, { Component } from 'react';
import '../App.css';
import {Nav,NavItem, NavLink} from 'reactstrap'

class Header extends Component {
    render() {
        return (
            <Nav pills>
                <NavItem>
                    <NavLink
                        active
                        href="/"
                    >
                        Home
                    </NavLink>
                </NavItem>
            
                <NavItem>
                    <NavLink href="/reptileindex">
                        Reptiles
                    </NavLink>
                </NavItem>
                    <NavItem>
                    <NavLink href="/reptilenew">
                        New Profile
                    </NavLink>
                </NavItem>

</Nav>
        )
    }
}

export default Header;