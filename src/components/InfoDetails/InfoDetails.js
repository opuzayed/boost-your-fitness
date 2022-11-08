import React from 'react';
import img from '../../Assets/Images/opu.jpg';
import Break from '../Break/Break';
import './InfoDetails.css';
const InfoDetails = () => {
    return (
        <div style={{marginLeft:'10px', marginTop:'20px', marginRight:'10px'}}>
            <div className='img-style'>
                <img src={img} alt="" />
                <h4>Zayed Hossain</h4>
            </div>
            <p style={{textAlign:'justify'}}>
                I help skinny people to build muscle without lifting weights.
                I help people like you to lose weight without breaking a sweat.
                We help athletes to up their game through proper nutrition.
            </p>
            <Break></Break>
        </div>
    );
};

export default InfoDetails;