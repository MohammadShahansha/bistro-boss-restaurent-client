import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart()

    const handelAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItems = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItems)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire('Post successfull')
                }
            })
        }  
        else{
            Swal.fire('You need to login')
            navigate('/login', {state: {form:location}})
        }  
    }

    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='absolute right-4 top-4 p-2 rounded-md bg-black text-white'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handelAddToCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;