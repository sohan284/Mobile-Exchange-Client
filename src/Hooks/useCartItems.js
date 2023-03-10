import { useEffect, useState } from 'react';


const useCartItems = () => {
    const [items,setItem] = useState([]);
    useEffect(() => {
        fetch(`https://mobile-exchange.onrender.com/cart`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return [items,setItem];
};


export default useCartItems;