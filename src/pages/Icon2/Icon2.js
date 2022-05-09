import React from 'react';
import h2 from '../../images/h2.jpg';
import './Icon2.css'
const icon2 = () => {
    return (
        <div>
            <h1 className='text-center'>Live features</h1>
            <div className='icon-parent container rounded  border p-2 m-4 sm:d-block'>
                <img className='border me-4' src={h2} alt="" />
                <div className='mt-20'>
                    <p>This item wiil stock our website. If You want to see live demo so please click this button to see live this item .</p>
                    <button className='btn btn-info'>Live Demo</button>
                </div>
            </div>
        </div>
    );
};

export default icon2;