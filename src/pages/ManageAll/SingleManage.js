import React from 'react';

const SingleManage = ({ data }) => {
    const { name, price, quantity, picture, _id } = data;
    const handleRemove = (id) => {
        console.log(id)
    }
    return (
        <div className='border m-2 p-2 rounded-lg'>
            <div className='d-flex align-items-center justify-center'>
                <img className='me-2' width={200} src={picture} alt="" />
                <div className='text-center'>
                    <h4>{name}</h4>
                    <p >Total: {quantity}</p>
                    <p >Price:{price}</p>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={() => handleRemove(_id)} className="btn btn-circle btn-primary mt-2 ps-4 pe-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
};

export default SingleManage;