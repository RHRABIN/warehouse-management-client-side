import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css'

const Item = ({ item }) => {
    const { name, description, picture, price, quantity, _id } = item;
    const navigate = useNavigate()
    const handleCheck = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='single-item'>
            <img className='flex-shrink-0 object-cover w-full border-transparent rounded outline-none ' src={picture} alt="" />
            <p>quantity:{quantity}</p>
            <p>${price}</p>
            <p><small>{description}</small></p>
            <h4>{name}</h4>
            <button onClick={handleCheck} className="btn btn-outline btn-primary ps-5 pe-5">Info</button>
        </div>
    );
};

export default Item;