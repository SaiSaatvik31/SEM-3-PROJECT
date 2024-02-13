import React from "react";
import Navbar from "../n_compo/navbar";
import Hero from "../n_compo/hero";
import Adv_book from "../n_compo/adv_book";
import OnlineCons from "../n_compo/onlineCons";
import Prescription from "../n_compo/Prescription";
import Articles from "../n_compo/articles";
import Footer1 from "../n_compo/footer1";
const bodyStyle = {
  // backgroundColor: "#000300",
  backgroundSize: "cover",
  height: "100vh",
};
function LandingPage() {
  return (
    <div style={bodyStyle} >
      <Navbar />
      <Hero />
      <Adv_book />
      <OnlineCons />
      <Prescription />
      <Articles />
      <Footer1 />
    </div>
  );
}

export default LandingPage;
