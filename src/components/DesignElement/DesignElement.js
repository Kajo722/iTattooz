import React from 'react';
import Image from '../Image/Image';

const DesignElement = props => {
    return (
        <div
            className={props.containerStyle}
            onMouseEnter={props.hoverOn}
            onMouseLeave={props.hoverOff}>
            <Image src={props.imageSrc} className={props.imageStyle} />
            <div className={props.backgroundStyle} />
            <div className={props.textStyle}>{props.children}</div>
        </div>
    );
};

export default DesignElement;
