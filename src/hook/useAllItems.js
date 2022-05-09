import { useEffect, useState } from 'react'
const useAllItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-tundra-55325.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [items])
    return [items, setItems]
}
export default useAllItems;