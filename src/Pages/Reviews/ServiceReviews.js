import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const ServiceReviews = ({feedback}) => {
    const { userName, message, email} = feedback;
    return (
        <div className='flex flex-row mb-2 bg-slate-700 justify-between p-3 rounded mx-2 items-center gap-4'>
            <div className='flex flex-col h-28 w-full bg-slate-800 p-4'>
                <h1 className='text-xl text-slate-200'>{userName}</h1>
                <p className='text-sm text-slate-200'>{email}</p>
            </div>
            <div className=''>
                <ArrowLongRightIcon className="h-10 w-10 font-extrabold text-light m-3"/>
            </div>
            <div className='w-full h-60 bg-slate-800 p-4'>
                <p className='text-xl text-slate-200'>Feedback: {message}</p>
            </div>
        </div>
    );
};

export default ServiceReviews;