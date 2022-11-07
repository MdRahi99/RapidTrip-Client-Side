import React from "react";
import img from "../../../Assets/Image/home-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="card glass my-12 relative">
      <div className="opacity-50">
        <img
          className="object-cover h-96 w-full"
          src={img}
          alt="home-bg"
        />
      </div>
      <div className="absolute w-full top-36 left-0 text-center">
        <h2 className="text-2xl lg:text-3xl mb-8">
          Travel the world with{" "}
          <span className="bg-orange-300 p-2 text-xl rounded-lg text-slate-700 font-bold">
            Rapid Trip
          </span>
        </h2>
        <p className="text-xl mb-12">Work, Travel, Repeat.</p>
        <div className="">
          <button className="btn btn-outline btn-success">Explore</button>
        </div>
      </div>
      <div class="lg:flex md:flex flex-col hidden gap-4 text-3xl absolute bottom-36 right-10 text-slate-100 opacity-70">
        <FontAwesomeIcon
          className="hover:text-slate-500"
          icon={faFacebook}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="hover:text-slate-500"
          icon={faGithub}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="hover:text-slate-500"
          icon={faLinkedin}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Home;
