import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ReptileIndex extends Component {
    render() {
        return(            
            <>
                <h1 >Reptile Index</h1>
                    {this.props.reptiles && this.props.reptiles.map(reptile => {
                    return (                                
                        <NavLink key={reptile.id} to={`/reptileshow/${reptile.id}`}>
                            {reptile.name}
                        </NavLink>
                            )
                        })}
            </>
            
        )
    }
    
}

export default ReptileIndex;

