import React from 'react';
import { Link } from "react-router-dom";

const LinkItem = props => {
    return (
        <li className={props.style}>
            <Link to={props.linkTo}>{props.children}</Link>
        </li>
    );
};

export default LinkItem;
