import React from 'react';
import './Break.css';
const Break = () => {
    return (
        <div style={{marginTop:'30px'}}>
            <h4 style={{color:'white'}}>Add a Break</h4>
            <div className='break-time'>
                <button className='time-style'><span>10s</span></button>
                <button className='time-style'><span>20s</span></button>
                <button className='time-style'><span>30s</span></button>
                <button className='time-style'><span>40s</span></button>
            </div>
        </div>
    );
};

export default Break;