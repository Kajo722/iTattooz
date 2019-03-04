import React from 'react';

const LinkList = props => {
    return <ul className={props.style}>{props.children}</ul>;
};

export default LinkList;
