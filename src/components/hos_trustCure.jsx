import React from "react";
import hos from "../hos_trust1.jpg";
import "../styles/hos.css";
import { useState } from "react";
function Hos_trustCure() {
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
      <div className="text-card mb-5">
        <span className="welcome-text">WELCOME TO TRUST-CURE HOSPITALS</span>
        <p className="text-content text-dark">
          Values and Mission: At Trust Cure, we are driven by a core set of
          values that define who we are and what we strive for. Compassion lies
          at the heart of everything we do, guiding us to treat each patient
          with empathy, respect, and dignity. We believe in the power of
          innovation, constantly seeking new pathways to improve clinical
          outcomes and enhance patient experiences. But our commitment extends
          beyond the four walls of our hospitals. We are deeply invested in
          serving our communities, fostering partnerships, and building a
          healthier future for all. Achievements and Growth: Over the years,
          Trust Cure has grown with a singular purpose: to make a tangible
          difference in people's lives. We are proud to share some of our
          milestones: Clinical Excellence: Recognized as a beacon of quality, we
          hold prestigious accreditations and boast patient outcomes that
          consistently surpass national benchmarks. Our dedicated team of
          healthcare professionals delivers exceptional care across all
          specialties, earning us the trust and gratitude of countless patients.
          Medical Advancements: We don't shy away from embracing innovation. We
          actively participate in cutting-edge research, invest in pioneering
          technologies, and implement life-saving treatments, ensuring our
          patients have access to the best possible care. Improved Patient
          Experience: We understand that healing goes beyond medicine. We
          prioritize patient comfort and well-being, creating a warm and
          welcoming environment that fosters dignity and respect. From
          personalized care plans to state-of-the-art facilities, we strive to
          make every patient journey positive and empowering. Community
          Engagement: We believe in being more than just a healthcare provider.
          We actively engage with our communities, supporting local initiatives,
          offering health education programs, and partnering with organizations
          that share our commitment to well-being. Future Vision and Goals:
          Looking ahead, we are driven by a clear vision: to be the most trusted
          healthcare provider, shaping a healthier future for every community we
          serve. This vision translates into ambitious goals: Expanding Access:
          We want to ensure that high-quality healthcare is within reach for
          everyone. We are committed to expanding our reach, opening new
          facilities, and collaborating with communities to bridge healthcare
          gaps. Investing in Innovation: We will continue to embrace the power
          of technology and scientific advancements, bringing the latest
          therapies and diagnostic tools to our patients. Enhancing Patient
          Care: We are constantly seeking ways to improve the patient
          experience, focusing on personalized care, seamless communication, and
          emotional support at every step of the journey.
        </p>
      </div>
    </div>
  );
}

export default Hos_trustCure;
