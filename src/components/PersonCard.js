// import React, { Component } from "react";

// class PersonCard extends Component {
//     constructor( props ) {
//         super( props );
//         this.state = {
//             Age : props.Age
//         };
//     }

//     birthdayButton = () => {
//         let newAge = this.state.Age += 1;
//         this.setState( { Age : newAge } );
//         console.log( newAge );
//     }

//     render() {
//         const { firstName, lastName, Age, HairColor } = this.props;
//         return (
//             <div>
//                 <h1>{ lastName }, { firstName }</h1>
//                 <p>Age: { this.state.Age }</p>
//                 <p>Hair Color: { HairColor }</p>
//                 <button onClick = { this.birthdayButton } > Birthday Button for { firstName } { lastName } </button>
//             </div>
//         );
//     }
// }

// export default PersonCard;


import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.Age }</p>
            <p>Hair Color: { props.HairColor }</p>
        </div>
    );
}
export default PersonCard;

