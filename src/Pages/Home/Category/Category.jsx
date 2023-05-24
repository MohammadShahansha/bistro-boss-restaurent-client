import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import TitleSection from '../../../components/TitleSection';

const Category = () => {
    return (
        <section>
            <TitleSection
                subHeading={"From 11:00am to 10:00pm"}
                heading={"order online"}
            >
            </TitleSection>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-4xl text-center -mt-20 text-white uppercase'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-4xl text-center -mt-20 text-white uppercase'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-4xl text-center -mt-20 text-white uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-4xl text-center -mt-20 text-white uppercase'>DESserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-4xl text-center -mt-20 text-white uppercase'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </section >
    );
};

export default Category;