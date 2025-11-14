import React from 'react'
const Description = ({description}) => {
    return (
        <div>
            <p className='p-5 border-2 rounded-xl mt-5 bg-white'>
               {description}
            </p>
        </div>
    );
};

export default Description;