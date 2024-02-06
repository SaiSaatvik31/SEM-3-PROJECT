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
                Welcome to the "Advance Booking" section on our doctor slot
                booking website – your pathway to priority healthcare. Designed
                with your convenience in mind, this feature grants you priority
                access to preferred time slots, allowing you to plan your
                healthcare appointments well in advance. Take control of your
                schedule, experience peace of mind with confirmed appointments,
                and benefit from personalized reminders leading up to your
                visit. Our user-friendly platform ensures flexibility in
                managing appointments, and for specialized services, enjoy
                preferred access to experienced specialists. Don't wait until
                the last minute – embrace the convenience of Advance booking and
                seamlessly integrate healthcare into your routine. Book now and
                experience healthcare on your terms with "TrustCure".
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
