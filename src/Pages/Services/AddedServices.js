import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AddedServices = () => {
    const userAddedService = useLoaderData();
    return (
        <div>
            {userAddedService.slice(6,30).map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
        </div>
    );
};

export default AddedServices;