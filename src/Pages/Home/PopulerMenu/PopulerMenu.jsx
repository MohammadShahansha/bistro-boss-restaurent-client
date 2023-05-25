import React, { useEffect, useState } from 'react';
import TitleSection from '../../../components/TitleSection';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerMenu = data.filter(item => item.category === 'popular');
                setMenu(populerMenu)
            })
    }, [])
    return (
        <section className='mb-16'>
            <TitleSection
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></TitleSection>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='w-2/12 mx-auto mt-5'>
                <button className=" mx-auto btn btn-ghost border-black border-0 border-b-4 ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopulerMenu;