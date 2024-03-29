import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import pic1 from "../Picture1.jpg";
import pic2 from "../Picture2.jpg";
import pic3 from "../Picture3.jpg";
import { motion } from "framer-motion";
function Articles() {
  return (
    <div className="bg_all">
      <FadeInOnScroll>
        <div className="w-full py-[10rem] px-4">
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold text-[rgb(40,48,115)]">
              ARTICLES
            </h1>
          </div>
          <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 article__container">
              <h2 className=" text-2xl text-bold text-[rgb(40,48,115)]">
                Article 1
              </h2>
              <div className="m-3">
                <img src={pic1} />
                <p className="mt-4 pfont">
                  Brain, the mass of nerve tissue in the anterior end of an
                  organism. The brain integrates sensory information and directs
                  motor responses to you brain and helps in functioning for our
                  body giving directions what to do.
                </p>
              </div>
              <motion.button
                className="mr-4 bookbtn ml-3"
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <a
                  target="_blank"
                  href="https://www.britannica.com/science/brain"
                >
                  Read More
                </a>
              </motion.button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 article__container">
              <h2 className=" text-2xl text-bold text-[rgb(40,48,115)]">
                Article 2
              </h2>
              <div className="m-3 ">
                <img src={pic2} />
                <p className="m-2 mt-5 pfont">
                  Heart disease is the leading cause of death worldwide. For
                  decades our health authorities and the majority of the medical
                  profession have told us that dietary saturated fat and
                  cholesterol are primary causes of heart disease
                </p>
              </div>
              <motion.button
                className="mr-4 bookbtn ml-3"
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <a
                  target="_blank"
                  href="
                  https://www.positivehealth.com/article/heart/the-real-causes-of-heart-disease-and-statins-don-t-help"
                >
                  Read More
                </a>
              </motion.button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 article__container">
              <h2 className=" text-2xl text-bold text-[rgb(40,48,115)] ">
                Article 3
              </h2>
              <div className="m-3">
                <img src={pic3} />
                <p className="pfont">
                  Chronic obstructive pulmonary disease (COPD) has for too long
                  been seen as a self-inflicted progressive disorder of smokers
                  towards the end of life with few treatment options beyond{" "}
                  symptom control
                </p>
              </div>
              <motion.button
                className="mr-4 bookbtn ml-3"
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <a
                  target="_blank"
                  href="
                    https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2822%2901700-7/fulltext
"
                >
                  Read More
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default Articles;
