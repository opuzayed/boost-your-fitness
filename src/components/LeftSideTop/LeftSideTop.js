import React from 'react';
import img from'../../Assets/Images/exercise.png';
import './LeftSideTop.css';
const LeftSideTop = () => {
    return (
        <div>
           <div className='header-title'>
          <div> <img src={img} alt="" /></div>
                <div style={{marginLeft:'30px'}}>
                    <h2>Boost Your Fitness</h2>
                </div>
           </div>
           <div style={{marginTop:'30px'}}>
            <h4>Select today’s exercise</h4>
           </div>
        </div>
    );
};

export default LeftSideTop;