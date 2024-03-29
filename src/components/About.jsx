import React from "react";

const About = () => {
  return (
    <div className="about-page m-3 ">
      {" "}
      <h1 className="about-title">About the Project:</h1>
      <h2 className="about-subtitle">
        Optimizing Doctor Availability and Appointment Allocation in Hospitals
        through Digital Technology and AI Integration
      </h2>
      <section className="about-team">
        <h3>Our Team</h3>
        <p>Meet the dedicated individuals behind this project:</p>
        <ul>
          <li>
            <span className="team-member-name">P.Krishna Sai</span> (B.E)
          </li>
          <li>
            <span className="team-member-name">Kamal Nayan</span> (B.E)
          </li>
          <li>
            <span className="team-member-name">Shashi </span> (B.E)
          </li>
          <li>
            <span className="team-member-name">Sathwik</span> (B.E)
          </li>
          <li>
            <span className="team-member-name">Amogh</span> (B.E)
          </li>
          <li>
            <span className="team-member-name">Pranay</span> (B.E)
          </li>
        </ul>
      </section>
      <section className="about-solution">
        <h3>OverView</h3>
        <p>
          Our website offers a convenient solution for scheduling doctor
          appointments tailored to your specific symptoms. Using advanced
          machine learning algorithms, we've trained a model that accurately
          predicts the medical specialization required based on the symptoms you
          input. This predictive capability streamlines the appointment booking
          process by ensuring you're directed to the most suitable healthcare
          provider for your needs. Through our user-friendly interface, you can
          seamlessly book appointments for yourself, family members, or
          individuals with profiles saved within your account. This feature is
          particularly helpful for managing healthcare appointments for loved
          ones who may require assistance. Furthermore, we understand the
          importance of time management in healthcare, which is why we've
          integrated a virtual waiting room feature. This feature provides
          real-time updates on estimated appointment wait times, allowing users
          to plan their schedules accordingly. By offering transparency and
          insight into appointment availability, we aim to minimize
          inconvenience and optimize the overall patient experience. To further
          enhance user engagement and support, we've implemented a chatbot
          feature. This intelligent assistant is available to guide users
          through the appointment booking process, answer common questions, and
          provide additional assistance as needed. Whether you're unsure about
          which symptoms to input or have questions about the booking process,
          our chatbot is
        </p>
      </section>
      <section className="about-features">
        <h3>Key Features</h3>
        <ul>
          <li>AI-powered symptom analysis</li>
          <li>Seamless appointment booking</li>
          <li>Virtual waiting room </li>
          <li>chatbot support</li>
        </ul>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
