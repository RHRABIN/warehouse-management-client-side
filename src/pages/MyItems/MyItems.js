import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myItems`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyItems(data)
            })
    }, [])
    return (
        <div>
            <h1>M item{myItems.length}</h1>
        </div>
    );
};

export default MyItems;