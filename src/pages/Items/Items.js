import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './items.css'
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div>

            <div className='items-container'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}

                    ></Item>)
                }
            </div>
            <div className='text-center mt-4'>
                <Link to='/manage'><button className='btn btn-outline btn-success ps-4 pe-4'>Manage All</button></Link>
            </div>
        </div>
    );
};

export default Items;