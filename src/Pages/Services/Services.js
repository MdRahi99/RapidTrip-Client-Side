import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Title from "../../Hooks/Title";

const Services = () => {
  const services = useLoaderData();
  Title('Services');

  return (
    <div className="my-12">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold my-12">Our provided services</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
