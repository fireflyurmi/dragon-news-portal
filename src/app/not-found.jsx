import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex flex-col justify-center items-center gap-10'>
            <h1 className='font-bold text-pink-500 text-7xl'>This Page is Not Found....</h1>
            <Link href={"/"}>
                <button className='btn btn-secondary'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;