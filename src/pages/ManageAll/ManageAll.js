import React, { useEffect, useState } from 'react';
import SingleManage from './SingleManage';
import './ManageAll.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
// Load all items from dtatabase
const ManageAll = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [items])
    // handle remome from database and disply ui
    const handleRemove = (id) => {
        const agree = window.confirm('Are you want delete?')
        if (agree) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining)
                    if (data.deletedCount > 0) {
                        toast('Delete Success')
                    }

                })
        }

    }
    return (
        <div className='container'>
            <h4 className='text-center italic text-danger'>Total: {items.length}</h4>
            <ToastContainer />
            <div className='manage-container'>
                {
                    items.map(data => <SingleManage
                        key={data._id}
                        data={data}
                        handleRemove={handleRemove}
                    ></SingleManage>)
                }
            </div>
            <div className="text-center">
                <Link to='/add'>
                    <button className='btn btn-outline btn-success ps-5  pe-5'>Add new item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageAll;