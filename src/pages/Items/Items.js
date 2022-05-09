import React from 'react';
import { Link } from 'react-router-dom';
import useAllItems from '../../hook/useAllItems';
import Item from '../Item/Item';
import './items.css'
const Items = () => {
    const [items, setItems] = useAllItems();


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