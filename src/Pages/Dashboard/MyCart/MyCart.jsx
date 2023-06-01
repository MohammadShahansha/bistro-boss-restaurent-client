import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss / MyCart</title>
            </Helmet>
            <div className='uppercase'>
                <h2>cart length:{cart.length}</h2>
                <h2>total price: ${total}</h2>
                <button className='btn btn-warning btn-sm'>pay</button>
            </div>
        </div>
    );
};

export default MyCart;