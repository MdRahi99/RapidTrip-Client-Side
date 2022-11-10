import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const AddedService = () => {

  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('https://rapid-trip-server.vercel.app/services')
    .then(res=> res.json())
      .then(data => setServices(data))
  },[])

  return (
    <div>
      {services.slice(6, 30).map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
    </div>
  );
};

export default AddedService;