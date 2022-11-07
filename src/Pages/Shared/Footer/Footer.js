import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center items-center p-8 mt-12 bg-neutral">
      <div className="text-slate-200">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div class="flex flex-row gap-4 text-3xl text-slate-100 opacity-70">
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
    </footer>
  );
};

export default Footer;
