// React component is just a function

//In order to use component you need to export it
import React from 'react';

export const Greeting = (props) => {
    return (
        <h2>
            Hello {props.name}!!!
        </h2>
    );
};