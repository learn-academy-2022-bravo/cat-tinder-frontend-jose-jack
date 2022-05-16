import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button
  } from 'reactstrap';

class ReptileShow extends Component {

    handleSubmit = () => {
        this.props.deleteReptile(this.props.reptile.id)
    }

    render() {
        let { reptile } = this.props
        return (
            <div>
                <h1>Reptile Show</h1>
                <p>Hi, my name {reptile && reptile.name}.</p>
                <img src={reptile && reptile.image} alt="rep"/>
                <p> I am {reptile && reptile.age} years old, I enjoy {reptile && reptile.enjoys}.</p>
                <NavLink to={`/reptileedit/${reptile && reptile.id}`}>
                    <Button>Edit Reptile Profile</Button>
                </NavLink>
                <NavLink to="/reptileindex">
                    <Button onClick={this.handleSubmit}>
                        Delete Reptile Profile
                    </Button>
                </NavLink>
            </div>
        );
    }
}

export default ReptileShow;
