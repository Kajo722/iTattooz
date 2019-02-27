import React from 'react';

const LinkItem = (props) => {
    return (
        <li className={props.style}><a href={props.link}>{props.children}</a></li>
    )
}

export default LinkItem;