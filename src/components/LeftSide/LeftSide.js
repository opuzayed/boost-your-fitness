import React from 'react';
import LeftSideTop from '../LeftSideTop/LeftSideTop';
import LeftSideCards from './../LeftSideCards/LeftSideCards';

const LeftSide = () => {
    return (
        <div style={{marginTop:'80px'}} className='set-bg'>
           <LeftSideTop></LeftSideTop>
           <LeftSideCards></LeftSideCards>
        </div>
    );
};

export default LeftSide;