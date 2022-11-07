import React from "react";
import img1 from '../../Assets/Image/choose-1.png';
import img2 from '../../Assets/Image/choose-2.png';
import img3 from '../../Assets/Image/choose-3.png';

const Choose = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-3xl text-slate-400 font-semibold text-center"><span className="border-x-2 border-dotted border-slate-200 px-5">Reason for Choose Us</span></h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 justify-items-center items-center my-10">
        <div className="shadow-lg bg-neutral p-4 rounded h-72">
            <img className="w-75 h-20 mx-auto hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={img1} alt="" />
            <h3 className="text-2xl text-slate-100 my-2">Trip Planning</h3>
            <p>Use our free trip planner to get a personalized day by day itinerary for your vacation & is the new way to plan your holiday.</p>
        </div>
        <div className="shadow-lg bg-neutral p-4 rounded h-72">
            <img className="w-75 h-20 mx-auto hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={img2} alt="" />
            <h3 className="text-2xl text-slate-100 my-5">Reliable Booking</h3>
            <p>Find the lowest price for Hotel Booking Without Payment today! Overall, Rapid Trip is a very safe and reliable platform for you to book accommodation.</p>
        </div>
        <div className="shadow-lg bg-neutral p-4 rounded h-72">
            <img className="w-75 h-20 mx-auto hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={img3} alt="" />
            <h3 className="text-2xl text-slate-100 my-5">Super Service</h3>
            <p>Over 1.2M hotels in 200+ countries and regions. Compare prices and save on your stay! Book hotels with real guest reviews and 24/7 customer service!</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
