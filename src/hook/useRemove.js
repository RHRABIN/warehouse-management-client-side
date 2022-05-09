import useAllItems from "./useAllItems";

const remove = id => {
    const [items, setItems] = useAllItems;
    const url = `http://localhost:5000/items/${id}`;
    fetch(url, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining)
            // if (data.deletedCount > 0) {
            //     toast('Delete Success')
            // }

        })
}
export default remove;