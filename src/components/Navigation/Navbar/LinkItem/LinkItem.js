import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = props => {
    return (
        <li onClick={props.click} className={props.style}>
            <Link to={props.linkTo}>{props.children}</Link>
        </li>
    );
};

export default LinkItem;
