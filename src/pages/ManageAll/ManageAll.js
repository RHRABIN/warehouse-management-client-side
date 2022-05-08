import React, { useEffect, useState } from 'react';
import SingleManage from './SingleManage';
import './ManageAll.css'

const ManageAll = () => {
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
            <h3>Total: {items.length}</h3>

            <div className='manage-container'>
                {
                    items.map(data => <SingleManage
                        key={data._id}
                        data={data}
                    ></SingleManage>)
                }
            </div>

        </div>
    );
};

export default ManageAll;