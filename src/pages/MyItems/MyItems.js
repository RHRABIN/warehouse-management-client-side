import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAllItems from '../../hook/useAllItems';
import useMyItems from '../../hook/UseMyItems';
import MyItem from './MyItem';
const MyItems = () => {
    // load from useMyItems hook
    const [myItems, setMyItems] = useMyItems([]);
    // load all item
    const [items, setItems] = useAllItems();
    const handleRemove = (id) => {
        const agree = window.confirm('Are you want delete?')
        if (agree) {

            //seceond url
            const url2 = `http://localhost:5000/myItems/${id}`;
            fetch(url2, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItems.filter(item => item._id !== id);
                    setMyItems(remaining);
                    if (data.deletedCount > 0) {
                        toast('Delete Success')
                    }
                })

        }
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
        <div>
            <h3 className='text-center text-primary'>Total added : {myItems.length}</h3>
            <div className='items-container'>
                <ToastContainer />
                {
                    myItems.map(item => <MyItem
                        key={item._id}
                        item={item}
                        handleRemove={handleRemove}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;