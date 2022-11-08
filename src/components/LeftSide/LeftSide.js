import React from 'react';
import LeftSideTop from '../LeftSideTop/LeftSideTop';
import LeftSideCards from './../LeftSideCards/LeftSideCards';

const LeftSide = () => {
    return (
        <div style={{marginTop:'80px'}}>
           <LeftSideTop></LeftSideTop>
           <LeftSideCards></LeftSideCards>
        </div>
    );
};

export default LeftSide;