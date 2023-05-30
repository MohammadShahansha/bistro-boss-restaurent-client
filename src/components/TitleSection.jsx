import React from 'react';

const TitleSection = ({subHeading, heading}) => {
    return (
        <div className='w-4/12 mx-auto mt-10'>
            <p className='text-[#D99904] text-center'>---{subHeading}---</p>
            <h2 className='text-5xl border-y-4 uppercase text-center'>{heading}</h2>
        </div>
    );
};

export default TitleSection;