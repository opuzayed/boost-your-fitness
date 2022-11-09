import React from 'react';
import './Option.css';
const Option = ({option, handleAddToCart}) => {
    const { img, title, time} = option;
    
    return (
        <div className='option'>
            <img src={img} alt=""></img>
            <div className='option-info'>
                <h5 className='option-name'>{title}</h5>
                <p>Time Required: {time}</p>
            </div>
            <button onClick={() => handleAddToCart(option)} className='btn-cart'>
                <p className='btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Option;