import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        const { firstName, lastName, Age, HairColor } = this.props;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { Age }</p>
                <p>Hair Color: { HairColor }</p>
            </div>
        );
    }
}

export default PersonCard;