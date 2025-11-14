import React from 'react';

const OtherPageBanner = ({image, heading}) => {
    return (
        <div
            style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            className="max-h-max w-full"
        >
            <div className='bg-[#14452f] bg-opacity-90 '>
                <h1 className=' text-6xl font-bold text-white  mx-auto text-center py-24 max-w-screen-sm'>{heading}</h1>
            </div>
        </div>
    );
};

export default OtherPageBanner;