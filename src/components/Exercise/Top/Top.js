import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Top.css'; 

const Top = () => {
    return (
       <div>
         <div className='top-section'>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            <h3>Boost-Your-Power</h3>
        </div>
        <h4>Select today’s exercise</h4>
       </div>
        
    );
};

export default Top;