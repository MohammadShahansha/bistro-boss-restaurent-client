import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
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
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;