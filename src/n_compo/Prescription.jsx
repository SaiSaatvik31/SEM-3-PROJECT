import React from "react";
import P_img from "../presc.jpg";
import FadeInOnScroll from "./FadeInOnScroll";
function Prescription() {
  return (
    <div className="bg_all">
      <FadeInOnScroll>
        <div className="w-full  py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-start mt-5 mr-5">
              <h1 className="text-[rgb(40,48,115)] md:text-4xl font-bold sm:text-3xl ">
                Prescription
              </h1><br />
              <p className="pfont">
              "Welcome to our Prescription section, dedicated to ensuring your health and well-
              being. Here, you can conveniently access and manage your digital prescriptions 
              provided by our experienced healthcare professionals. Our user-friendly platform 
              allows you to view, download, and even send your prescriptions to your preferred 
              pharmacy seamlessly. We prioritize your convenience and strive to make the 
              prescription process efficient and accessible. With our secure and easily navigable 
              Prescription section, you can stay focused on your health while we take care of the rest. 
              Your well-being is our priority, and this feature is designed to enhance your healthcare 
              experience by providing quick and hassle-free access to your personalized medical prescriptions."
              </p>
            </div>
            <div className="flex justify-end">
              <img src={P_img} alt="/" className="w-[500px] my-4 ml-5" />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default Prescription;
