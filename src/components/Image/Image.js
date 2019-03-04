import React from 'react';

const Image = props => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            style={props.style}
            className={props.className}
        />
    );
};

export default Image;