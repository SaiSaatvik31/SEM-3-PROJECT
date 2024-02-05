import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
// import FadeInOnScroll from "./FadeInOnScroll";
function Footer1() {
  return (
    <div>
      {/* <FadeInOnScroll> */}
        <div className="w-full bg-gray-900 text-white">
          <div className="max-w-[1240px] mx-auto py-8 px-4 lg:flex lg:justify-between lg:items-center">
            <div className="flex justify-center lg:justify-start lg:w-2/3">
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-blue-500">
                  <FaFacebookSquare className="text-2xl" />
                </a>
                <a href="#" className="hover:text-purple-500">
                  <FaGithubSquare className="text-2xl" />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitterSquare className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right lg:w-1/3">
              <p className="text-base font-medium text-[#00df9a]">
                © 2024 TrustCure
              </p>
            </div>
          </div>
        </div>
      {/* </FadeInOnScroll>  */}
    </div>
  );
}

export default Footer1;
