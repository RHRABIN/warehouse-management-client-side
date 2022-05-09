import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AddNewItem.css'
const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const confirm = window.confirm('Are You add this item?');
        if (confirm) {
            const url = `https://sheltered-tundra-55325.herokuapp.com/items`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {



                })
            // click by save this item together other collection
            axios.post('https://sheltered-tundra-55325.herokuapp.com/myItems', data)
                .then(res => {

                    const { data } = res;
                    if (data.insertedId) {
                        toast('This item added succesfully');

                    }
                })
        }

    };
    return (
        <div className=' mt-5 container text-center bg-lime-200 pb-20 pt-10'>
            <h2 className='text-success fw-bold'>Add New Item</h2>
            <ToastContainer />
            <form className='d-flex flex-col form-container ' onSubmit={handleSubmit(onSubmit)}>
                <input className=' ps-2 border mb-2' required placeholder='Enter item name' {...register("name")} />
                <input className='ps-2 border mb-2' required placeholder='Enter price' type="number" {...register("price")} />
                <input className='ps-2 border mb-2' required placeholder='Enter image url' type="text" {...register('picture')} />
                <input className='ps-2 border mb-2' required placeholder='Enter item quantity' type="number" {...register('quantity')} />
                <input className='ps-2 border mb-2' required placeholder='Enter suplier name' type="text" {...register('suplierName')} />
                <input className='border form-button  btn btn-primary' type="submit" value='Add new item' />
            </form>
        </div>
    );
};

export default AddNewItem;