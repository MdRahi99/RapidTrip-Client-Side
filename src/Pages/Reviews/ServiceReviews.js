import React, { useContext } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceReviews = ({feedback}) => {
    const {user} = useContext(AuthContext);
    const { userName, message, email} = feedback;
    console.log(feedback)
    return (
        <div className='flex flex-row mb-2 bg-slate-700 justify-between p-3 rounded mx-2 items-center gap-4 w-full'>
            <div className='flex flex-col gap-2 h-28 w-full bg-slate-800 p-4'>
                <img className='h-6 w-6' src={user?.photoURL} alt="" />
                <h1 className='text-xl text-slate-200'>{userName}</h1>
                <p className='text-sm text-slate-200'>{email}</p>
            </div>
            <div className='w-full'>
                <ArrowLongRightIcon className="h-10 w-10 font-extrabold text-light m-3"/>
            </div>
            <div className='w-full h-60 bg-slate-800 p-4'>
                <p className='text-xl text-slate-200'>Feedback: {message}</p>
            </div>
        </div>
    );
};

export default ServiceReviews;