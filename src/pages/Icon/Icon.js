import React from 'react';
import h1 from '../../images/h1.jpg'
import h2 from '../../images/h2.jpg'
import h3 from '../../images/h3.jpg'
import './Icon.css'
const Icon = () => {
    return (
        <div>
            <h2 className='text-center'>Oue next Features</h2>
            <div className='icon-container bg-slate-200	p-4 text-center'>

                <div>
                    <img height={400} src={h1} alt="" />
                    <button className='btn btn-outline btn-success pe-4 ps-4 m-3'>See Detail</button>
                </div>
                <div>
                    <img height={400} src={h3} alt="" />
                    <button className='btn btn-outline btn-success pe-4 ps-4 m-3'>See Detail</button>
                </div>
                <div>
                    <img height={400} src={h3} alt="" />
                    <button className='btn btn-outline pe-4 ps-4 btn-success m-3'>See Detail</button>
                </div>
            </div>
        </div>

    );
};

export default Icon;