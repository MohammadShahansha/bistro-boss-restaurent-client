import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import TitleSection from '../../../components/TitleSection';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')

    
   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss / Menu</title>
            </Helmet>
            {/* main cover */}
           <Cover img={menuimg} title = "Our Menu"></Cover>

           {/* offered items--------------------------- */}
           <TitleSection subHeading="Don't Miss" heading="Today's Offer"></TitleSection>
           <MenuCategory items = {offered}></MenuCategory>

           {/* dessert items------------------------------ */}
           <MenuCategory
            items = {desserts}
            title="Desserts"
            img = {dessertImg}
            ></MenuCategory>

            {/* pizza items----------------------------------- */}
           <MenuCategory
            items = {pizza}
            title="Pizzas"
            img = {pizzaImg}
            ></MenuCategory>

            {/* salads item------------------------------------------- */}
           <MenuCategory
            items = {salad}
            title="salads"
            img = {saladImg}
            ></MenuCategory>

            {/* soup items------------------------------------------------ */}
           <MenuCategory
            items = {soup}
            title="Soup"
            img = {soupImg}
            ></MenuCategory>
           
          
        </div>
    );
};

export default Menu;