// React component is just a function

//In order to use component you need to export it
import React from 'react';
// destructuring props into 3 names
export const Greeting = ({
    name,
    favoriteNumber,
    favoriteColors
}) => {
    return (
        <>
            <h2>
                 Hello {name}!!!
            </h2>
            <h3>
                {name}'s favorite number is {favoriteNumber}
            </h3>
            <h3>
                {/* {name}'s favorite number is {favoriteNumber + 10} */}
            </h3>
            <h3>
                {name}'s favorite colors are:
            </h3>
            <ul>
                {favoriteColors.map(x => <li>{x}</li>)}
            </ul>
        </>
    );
};