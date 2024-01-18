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
              Welcome to our Online Consultation service, designed to provide you with convenient 
              and accessible healthcare from the comfort of your own space. Our platform offers a 
              seamless experience for booking virtual appointments with experienced doctors, 
              allowing you to consult with medical professionals without the need for in-person 
              visits. Whether you're seeking expert advice, follow-up consultations, or have non-
              emergency health concerns, our Online Consultation feature empowers you to 
              schedule and attend appointments at your convenience. Experience personalized and 
              confidential healthcare consultations, ensuring that you receive the care you need, 
              when you need it. Take a proactive step towards your well-being with our efficient and 
              secure online platform for medical consultations.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default OnlineCons;
