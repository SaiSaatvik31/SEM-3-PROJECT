import React from "react";
import hos from "../hos_apollo2.jpg";
import "../styles/hos.css";
import { useState } from "react";
function Hos_apollo() {
  const [animated, setAnimated] = useState(false);

  const handleMouseEnter = () => {
    setAnimated(true);
  };

  const handleMouseLeave = () => {
    setAnimated(false);
  };

  return (
    <div className="hosMain ">
      <img src={hos} alt="Kamineni Hospitals" className="background-img" />
      <div className="text-card">
        <span className="welcome-text">WELCOME TO APOLLO HOSPITALS</span>
        <p className="text-content text-dark">
          Values: At Apollo Hospitals, our core values have propelled us
          forward: Patient-centricity: We believe in putting the patient at the
          heart of everything we do, delivering compassionate and personalized
          care. Clinical excellence: We are committed to providing cutting-edge
          treatments and technology, driven by a team of renowned doctors and
          specialists. Ethical conduct: We uphold the highest ethical standards
          in all our endeavors, earning the trust of our patients and
          communities. Continuous innovation: We strive to constantly innovate
          and evolve, pushing the boundaries of healthcare to improve patient
          outcomes. Social responsibility: We understand our role in giving back
          to society, actively engaged in community outreach programs and making
          healthcare accessible to all. Achievements: Over the years, we have
          achieved significant milestones: A network of over 70 hospitals and
          1,500 pharmacies across India and internationally. Pioneering advanced
          medical technologies and procedures. Leading the way in organ
          transplantation, robotics, and minimally invasive surgery. Receiving
          numerous awards and accolades for our quality of care and patient
          satisfaction. Treating millions of patients and saving countless
          lives. Growth: Our journey of growth is far from over. We are:
          Expanding our reach globally, making quality healthcare accessible to
          more people. Investing in research and development to bring
          life-saving innovations to patients. Empowering our healthcare
          professionals with advanced training and technology. Collaborating
          with leading institutions to improve healthcare delivery worldwide.
          Looking Ahead: As we look ahead, we remain committed to: Delivering
          exceptional care, exceeding expectations. Being a leader in medical
          research and innovation. Making healthcare accessible and affordable
          for all. Building a healthier future for generations to come.
        </p>
      </div>
    </div>
  );
}

export default Hos_apollo;
