import React from 'react';
import { GridLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center '>
            <GridLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;