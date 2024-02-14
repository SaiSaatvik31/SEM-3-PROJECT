import React, { useState } from "react";
import hos from "../hos_kamineni2.jpg";
import "../styles/hos.css";

function Hos_kamineni() {
  const [animated, setAnimated] = useState(false);

  const handleMouseEnter = () => {
    setAnimated(true);
  };

  const handleMouseLeave = () => {
    setAnimated(false);
  };

  return (
    <div className="hosMain">
      <img src={hos} alt="Kamineni Hospitals" className="background-img" />
      <div className="text-card">
        <span className="welcome-text">WELCOME TO KAMINENI HOSPITALS</span>
        <p className="text-content text-dark">
          Right from demonstrating our true mettle in healthcare to making
          headway in the educational domain, Kamineni Hospitals has always put
          its best foot forward, leading the way for medical innovation. With
          over 30 glorious years of medical expertise, we can proudly state that
          we have touched over a million lives, and to this day we continue to
          take every step to enhance as many lives as possible. The intention to
          transform, shift the paradigms, and make an indelible impact that will
          last generations – all starts with a thought! A thought then evolves
          into an intention driven by unruffled passion. It is this intention
          that turned Mr. Kamineni Suryanarayana into an entrepreneur and
          philanthropist. A staunch believer in Karma Yoga, having no attachment
          to the fruits but deeds alone along with the grand vision of impacting
          more lives with a noble intention drove Mr. Suryanarayana Kamineni to
          find the Kamineni Group. Starting with United Steel Allied Industries
          Pvt. Ltd., in 1966, he stood at the helm of the organization with a
          crystal clear vision of enhancing lives. Soon after, USAIPL
          successfully forged the way for several other manufacturing facilities
          under the aegis of Kamineni Group – Oil Country Tubular Ltd. We credit
          all our accomplishments to his unwavering vision and ambition.
        </p>
      </div>
    </div>
  );
}

export default Hos_kamineni;
