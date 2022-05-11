import React, { Component } from 'react';

class ReptileShow extends Component {
    render() {
        return (
            <div>
                <h1>Reptile Show</h1>
                <p>Hi, my name {this.props.reptile && this.props.reptile.name}.</p>
                <img src={this.props.reptile && this.props.reptile.image} alt="rep"/>
                <p> I am {this.props.reptile && this.props.reptile.age} years old, I enjoy {this.props.reptile && this.props.reptile.enjoys}.</p>
            </div>
        );
    }
}

export default ReptileShow;


{/* <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
    <img src={this.props.cat.image} alt="adorable cat" />
    <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText> */}