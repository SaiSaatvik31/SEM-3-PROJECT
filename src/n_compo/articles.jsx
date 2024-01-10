import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";
function Articles() {
  return (
    <div>
      <FadeInOnScroll>
        <div className="w-full py-[10rem] px-4">
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold text-[#00df9a]">ARTICLES</h1>
          </div>
          <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
              <h2 className=" text-2xl text-bold text-[#00df9a]">Article 1</h2>
              <div>
                <br />
                <br />
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, maxime! Sint obcaecati mollitia facere veritatis,
                  voluptates quisquam eos, aliquid ut sapiente enim voluptate!
                  Nam earum asperiores, molestias numquam vel rem.
                </p>
              </div>
              <button>Read More</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
              <h2 className=" text-2xl text-bold text-[#00df9a]">Article 2</h2>
              <div>
                <br />
                <br />
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, maxime! Sint obcaecati mollitia facere veritatis,
                  voluptates quisquam eos, aliquid ut sapiente enim voluptate!
                  Nam earum asperiores, molestias numquam vel rem.
                </p>
              </div>
              <button>Read More</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
              <h2 className=" text-2xl text-bold text-[#00df9a] ">Article 3</h2>
              <div>
                <br />
                <br />
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, maxime! Sint obcaecati mollitia facere veritatis,
                  voluptates quisquam eos, aliquid ut sapiente enim voluptate!
                  Nam earum asperiores, molestias numquam vel rem.
                </p>
              </div>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default Articles;
