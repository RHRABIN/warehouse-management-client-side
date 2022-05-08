import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (quantity > 0) {
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
                    console.log(data);

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
        console.log(newQuantity)
        const quantity = (preQuantity + newQuantity);
        console.log(quantity)
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
                console.log(data);

            })




    }

    return (
        <div className='d-flex'>

            <div className='single-item w-50'>
                <img className='flex-shrink-0 object-cover w-full border-transparent rounded outline-none ' src={item.picture} alt="" />
                <p>quantity:{item.quantity}</p>
                <p>${item.price}</p>
                <p><small>{item.description}</small></p>
                <h4>{item.name}</h4>
                <button onClick={handleQuantity} className="btn btn-outline btn-primary ps-5 pe-5">Deleverd</button>
                <ToastContainer />
            </div>
            <form onSubmit={handleAdd} className='text-center mt-5 mb-5 ms-5'>
                <Form.Group className="mb-3 h-10" >
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="num" name='num' id='num' placeholder="Enter quantity" required />

                </Form.Group>
                <Button className='w-100 mx-auto d-block' variant="primary" type="submit">
                    Add Quantity
                </Button>
            </form>
        </div>
    );
};

export default Inventory;