import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Inventory.css'
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);
    // items quantity decrease
    const handleQuantity = () => {
        const preQuantity = item.quantity;
        const quantity = preQuantity - 1;
        if (quantity >= 0) {
            const updateInfo = { quantity };

            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateInfo)
            })
                .then(res => res.json())
                .then(data => {
                    toast('One item delevered success')

                })


        }
        else {
            toast('This item has no stock')
        }
    }
    const handleAdd = (event) => {
        event.preventDefault()
        const preQuantity = parseInt(item.quantity);
        const newQuantity = parseInt(event.target.num.value);
        const quantity = (preQuantity + newQuantity);
        const updateInfo = { quantity };

        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast('Quantity added succesfully')

            })




    }

    return (
        <div>
            <div className='inventory-container container'>

                <div className='single-item sm:w-80 md:w-52 lg:w-1/2'>
                    <img className='flex-shrink-0 object-cover w-full border-transparent rounded outline-none ' src={item.picture} alt="" />
                    <p>quantity:{item.quantity}</p>
                    <p>${item.price}</p>
                    <p><small>{item.description}</small></p>
                    <h4>{item.name}</h4>
                    <button onClick={handleQuantity} className="btn btn-outline btn-primary ps-5 pe-5">Deleverd</button>
                    <ToastContainer />
                </div>
                <form onSubmit={handleAdd} className='text-center sm:w-80 md:w-52 lg:w-1/2  mt-5 mb-5 ms-5'>
                    <h2>Add Items Quantity</h2>
                    <Form.Group className="mb-3 h-10" >
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="num" name='num' id='num' placeholder="Enter quantity" required />

                    </Form.Group>
                    <Button className='w-100 mx-auto d-block' variant="primary" type="submit">
                        Add Quantity
                    </Button>
                </form>
            </div>
            <div className="text-center m-3">
                <Link to='/manage'><button className='btn btn-outline btn-success ps-4 pe-4'>Manage All</button></Link>
            </div>
        </div>
    );
};

export default Inventory;