import React from 'react';
import './skeleton.scss';

const SkeletonElem = ({type}) => {
    const classes = `skeleton ${type}`
    return (
        <div className={classes}>
        </div>
    );
};

export default SkeletonElem;