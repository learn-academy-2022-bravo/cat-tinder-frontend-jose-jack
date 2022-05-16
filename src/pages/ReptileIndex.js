import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {  Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup } from 'reactstrap';

class ReptileIndex extends Component {
    render() {
        let {reptiles} = this.props 
        return(  
            <cardContainer className = "cardPic">
            {reptiles && reptiles.map(reptile => {          
                return(
                //<h1 >Reptile Index</h1>
                <CardGroup  >
                    <Card >
                        <CardImg 
                        alt="Card image cap"
                        src= {reptile.image}
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {reptile.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                        {reptile.age}
                        </CardSubtitle>
                        <CardText>
                        {reptile.enjoys}
                        </CardText>
                            <Button>
                                <NavLink key={reptile.id} to={`/reptileshow/${reptile.id}`}>
                                                    {reptile.name}
                                                </NavLink>
                            </Button>
                        </CardBody>
                </Card>
                </CardGroup>
                )       
                    

        })}
        </cardContainer>  
        )
    }
    
}

export default ReptileIndex;

