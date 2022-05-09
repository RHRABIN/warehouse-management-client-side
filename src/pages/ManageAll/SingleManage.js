import React from 'react';

const SingleManage = ({ data, handleRemove }) => {
    const { name, price, quantity, picture, _id } = data;

    return (
        <div className='border m-2 p-2 rounded-lg'>
            <div className='d-flex align-items-center justify-center'>
                <img className='me-2' width={200} src={picture} alt="" />
                <div className='text-center'>
                    <h5>{name}</h5>
                    <p >Total: {quantity}</p>
                    <p >Price:{price}</p>
                </div>
            </div>
            <div className='text-center '>
                <button onClick={() => handleRemove(_id)} className="btn btn-outline   btn-danger mt-4 text-center  w-100">
                    Remove this item <span className='fw-bold'>X</span>

                </button>
            </div>
        </div>
    );
};

export default SingleManage;