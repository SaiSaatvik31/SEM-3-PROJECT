import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";
function Adv_book() {
  return (
    <div>
      <FadeInOnScroll>
        <div className="w-full bg-white py-16 px-4 mb-5">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-[#00df9a] md:text-4xl font-bold sm:text-3xl ">
                Advance Booking
              </h1>
              <p className="mt-3 mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo perspiciatis ea porro, quaerat, consectetur quos
                mollitia omnis assumenda voluptates eligendi ipsa animi quidem
                provident! Veniam, consequatur. Sunt nam minima voluptatem.
              </p>
              <div>
                <button className=" text-white bg-dark w-[200px] rounded-md font-medium px-6 mx-auto py-3 text-dark mt-3 ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </FadeInOnScroll>
    </div>
  );
}

export default Adv_book;
