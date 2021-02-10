// React component is just a function

//In order to use component you need to export it
import React from 'react';

export const Greeting = (props) => {
    return (
        <>
            <h2>
                 Hello {props.name}!!!
            </h2>
            <h3>
                {props.name}'s favorite number is {props.favoriteNumber}
            </h3>
            <h3>
                {/* {props.name}'s favorite number is {props.favoriteNumber + 10} */}
            </h3>
            <h3>
                {props.name}'s favorite colors are:
            </h3>
            <ul>
                {props.favoriteColors.map(x => <li>{x}</li>)}
            </ul>
        </>
    );
};