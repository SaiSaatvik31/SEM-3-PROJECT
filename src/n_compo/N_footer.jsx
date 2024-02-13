import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import FadeInOnScroll from "./FadeInOnScroll";
function N_footer() {
  return (
    <FadeInOnScroll>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <div
          className="w-full "
          style={{
            background: "rgba(25,25,25,.15)",
            backdropFilter: "blur(10px)",
            color: "var(--logo-color)",
          }}
        >
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
                  <FaInstagramSquare className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitterSquare className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right lg:w-1/3">
              <p className="text-base font-medium">© 2024 TrustCure</p>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export default N_footer;
