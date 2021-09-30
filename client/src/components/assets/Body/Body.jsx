import React from 'react';
import './Body.scss';

const Body = (props) => {
    return (
        <div className='wrapper'>
            {props.children}
        </div>
    );
};

export default Body;