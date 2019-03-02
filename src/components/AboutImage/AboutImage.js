import React from 'react';

const aboutImage = (props) => {
    return (
        <div className={props.containerStyle}>
            {props.children}
        </div>
    )
}

export default aboutImage;