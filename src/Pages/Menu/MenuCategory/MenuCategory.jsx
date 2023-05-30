import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-10'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className='flex justify-center my-5' >
                <button className=" text-blue-700 btn btn-ghost border-black border-0 border-b-4 ">Order food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;