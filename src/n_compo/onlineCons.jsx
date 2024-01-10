import React from "react";
import doc from "../doc_cons.png";
import FadeInOnScroll from "./FadeInOnScroll";
function OnlineCons() {
  return (
    <div>
      <FadeInOnScroll>
        <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img src={doc} alt="/" className="w-[500px]  my-4 pl-0 ml-0 " />
            <div className="flex flex-col justify-start mt-5">
              <h1 className="text-[#00df9a] md:text-4xl font-bold sm:text-3xl ">
                Online Consultation
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo perspiciatis ea porro, quaerat, consectetur quos
                mollitia omnis assumenda voluptates eligendi ipsa animi quidem
                provident! Veniam, consequatur. Sunt nam minima voluptatem.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default OnlineCons;
