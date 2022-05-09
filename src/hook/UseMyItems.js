import { useState, useEffect } from 'react'
const useMyItems = () => {
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        fetch(`https://sheltered-tundra-55325.herokuapp.com/myItems`)
            .then(res => res.json())
            .then(data => {

                setMyItems(data)
            })
    }, [myItems])

    return [myItems, setMyItems];
}
export default useMyItems;