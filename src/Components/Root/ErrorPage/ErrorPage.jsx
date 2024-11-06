import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError()
    const {status,statusText} =err
   
    return (
        <div className='flex justify-center items-center'>
            <div className="">

                <img src="https://i.ibb.co.com/yRBKngd/images.png" alt="" />
                <h1 className='text-5xl font-bold text-center mb-3'>{status}</h1>
                <p className='text-2xl text-center '>{statusText}</p>
                

            </div>
        </div>
    );
};

export default ErrorPage;