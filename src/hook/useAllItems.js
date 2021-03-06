import { useEffect, useState } from 'react'
const useAllItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [items])
    return [items, setItems]
}
export default useAllItems;