import React from 'react';
import featured from '../../../assets/home/featured.jpg'
import TitleSection from '../../../components/TitleSection';
import './Feature.css'

const Featured = () => {
    return (
        <div className='feature-item bg-fixed text-white mb-9'>
            <div className='pt-10'>
            <TitleSection
             subHeading={"Check it out"}
             heading={"FROM OUR MENU"}
            ></TitleSection>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 text-white items-center p-20 gap-7'>
                <img src={featured} alt="" />
                <div>
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-ghost border-white border-0 border-b-4 ">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;