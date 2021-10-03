import React from 'react';
import SkeletonElem from "./SkeletonElem.jsx";
import LoadinEffect from "./loadinEffect.jsx";
import './skeleton.scss';

const TableLine = () => {
    return (
            <div className='skeleton-wrapper'>
                <SkeletonElem type='text'/>
                <SkeletonElem type='number'/>
                <SkeletonElem type='text'/>
                <SkeletonElem type='number'/>
                <SkeletonElem type='number'/>
                <SkeletonElem type='text'/>
                <SkeletonElem type='number'/>
                <SkeletonElem type='number'/>
                <SkeletonElem type='graf'/>
                <LoadinEffect />
            </div>
    );
};

export default TableLine;