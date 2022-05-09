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
        const url = `https://sheltered-tundra-55325.herokuapp.com/items/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);
    // items quantity decrease
    const handleRemove = () => {
        const preQuantity = item.quantity;
        const quantity = preQuantity - 1;
        if (quantity >= 0) {
            const updateInfo = { quantity };

            const url = `https://sheltered-tundra-55325.herokuapp.com/items/${id}`;
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

        const url = `https://sheltered-tundra-55325.herokuapp.com/items/${id}`;
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
        <div className='bg-slate-100'>
            <div className='container '>

                <div className=' '>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>No</th>
                                <th scope="col-4">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td><img className='w-20' src={item.picture} alt="" /></td>
                                <td><button onClick={handleRemove} className='btn btn-outline btn-success'>Order This Item</button></td>
                            </tr>


                        </tbody>
                    </table>

                </div>
                <div className=' d-flex align-items-center justify-center '>
                    <form onSubmit={handleAdd} className='text-center border p-4 sm:w-80 md:w-52 lg:w-1/2 bg-orange-100  mt-5 mb-5 ms-5'>
                        <h2>Add Items Quantity</h2>
                        <Form.Group className="mb-3 h-10" >
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="num" name='num' id='num' placeholder="Enter quantity" required />

                        </Form.Group>
                        <Button c lassName='w-100 mx-auto d-block' variant="primary" type="submit">
                            Add Quantity
                        </Button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
            <div className="text-center m-3">
                <Link to='/manage'><button className='btn btn-outline btn-success ps-4 pe-4'>Manage All</button></Link>
            </div>
        </div>
    );
};

export default Inventory;