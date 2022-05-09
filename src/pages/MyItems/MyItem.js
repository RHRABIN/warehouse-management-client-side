import React from 'react';

import './MyItem.css'

const MyItem = ({ item, handleRemove }) => {
    const { name, price, picture, quantity, suplierName, _id } = item;


    return (
        <div className='myitem-container'>

            <div className='text-center '>
                < img width={400} className='' src={picture} alt="" />
            </div>

            <div>

                <h3>{name}</h3>
                <p>Price : ${price}</p>
                <p>total: {quantity}</p>
                <p>suplier: {suplierName}</p>
                <button onClick={() => handleRemove(_id)} className='btn btn-outline btn-danger'>Remove <span className='fw-bold'> X</span></button>
            </div>

        </div >
    );
};

export default MyItem;