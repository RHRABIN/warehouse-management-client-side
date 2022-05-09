import React from 'react';

import './MyItem.css'

const MyItem = ({ item, handleRemove }) => {
    const { name, price, picture, quantity, suplierName, _id } = item;


    return (






        <tr >
            <td className='text-center'>1</td>
            <td className='text-center'>{name}</td>
            <td className='text-center'>{price}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'><img className='w-20' src={picture} alt="" /></td>
            <td className='text-center'><button onClick={() => handleRemove(_id)} className='btn btn-outline btn-danger'>Remove <span className='fw-bold'> X</span></button></td>
        </tr>




    );
};

export default MyItem;