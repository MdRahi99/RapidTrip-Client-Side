import React from "react";
import img from "../../../Assets/Image/home-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Choose from "../Choose";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="card glass my-12 relative">
        <div className="opacity-50">
          <img className="object-cover h-96 w-full" src={img} alt="home-bg" />
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
            <button className="px-4 py-2 shadow-transparent bg-orange-400 hover:bg-orange-600 text-slate-900 font-bold rounded">
              Explore
            </button>
          </div>
        </div>
        <div class="lg:flex md:flex flex-col hidden gap-4 text-3xl absolute bottom-36 right-10 text-slate-100 opacity-70">
          <FontAwesomeIcon
            className="hover:text-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="hover:text-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            icon={faGithub}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="hover:text-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </div>
      </div>
      <Choose></Choose>
      <Contact></Contact>
    </div>
  );
};

export default Home;
