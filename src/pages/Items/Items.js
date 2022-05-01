import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div>

            <div className='items-container'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}

                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;