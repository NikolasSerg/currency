import React from 'react';
import SkeletonElem from "./SkeletonElem.jsx";
import LoadinEffect from "./loadinEffect.jsx";
import './skeleton.scss';

const TableLine = () => {
    return (
            <tr className='skeleton-wrapper'>
                <td><SkeletonElem type='text'/></td>
                <td><SkeletonElem type='number'/></td>
                <td><SkeletonElem type='text'/></td>
                <td><SkeletonElem type='number'/></td>
                <td><SkeletonElem type='number'/></td>
                <td><SkeletonElem type='text'/></td>
                <td><SkeletonElem type='number'/></td>
                <td><SkeletonElem type='number'/></td>
                <td><SkeletonElem type='number'/></td>
                <LoadinEffect />
            </tr>
    );
};

export default TableLine;