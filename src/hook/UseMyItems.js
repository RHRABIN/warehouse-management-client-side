import { useState, useEffect } from 'react'
const useMyItems = () => {
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myItems`)
            .then(res => res.json())
            .then(data => {

                setMyItems(data)
            })
    }, [myItems])

    return [myItems, setMyItems];
}
export default useMyItems;