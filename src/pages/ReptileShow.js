import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button
  } from 'reactstrap';

class ReptileShow extends Component {
    render() {
        let { reptile } = this.props
        return (
            <div>
                <h1>Reptile Show</h1>
                <p>Hi, my name {this.props.reptile && reptile.name}.</p>
                <img src={this.props.reptile && reptile.image} alt="rep"/>
                <p> I am {this.props.reptile && reptile.age} years old, I enjoy {this.props.reptile && reptile.enjoys}.</p>
                <NavLink to={`/reptileedit/${this.props.reptile && reptile.id}`}>
                    <Button>Edit Reptile Profile</Button>
                </NavLink>
            </div>
        );
    }
}

export default ReptileShow;
