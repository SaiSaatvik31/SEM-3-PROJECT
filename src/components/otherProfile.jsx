import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChooseBook from "./chooseBook";
const Profile = ({ data, handleBook, directBook }) => (
  <div className="profile-container bg-blue-200 p-4 mb-4">
    <h1>Profile</h1>
    <p>Name: {data.name}</p>
    <p>Age: {data.Age}</p>
    <p>Gender: {data.gender}</p>
    {/* <Button
      onClick={() => {
        console.log(data);
        handleBook(data);
      }}
    >
      Book Appointment
    </Button> */}
    <ChooseBook
      handleBook={() => {
        handleBook(data);
      }}
      directBook={() => {
        directBook(data);
      }}
    />
  </div>
);

const OtherProfile = ({ selectedOptions, updateSelectedOptions }) => {
  const navigate = useNavigate();
  console.log(selectedOptions);
  const [formData, setFormData] = useState({
    name: "",
    Age: "",
    gender: "",
  });
  const [profileData, setProfileData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddProfile = async () => {
    const token = localStorage.getItem("token");
    const email = token ? JSON.parse(atob(token.split(".")[1])).email : null;
    const newProfile = { ...formData };
    console.log(newProfile);

    setProfileData((prevProfiles) => [...prevProfiles, newProfile]);

    setFormData({
      name: "",
      Age: "",
      gender: "",
    });

    const response = await fetch("/api/newProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newProfile }),
    });
  };
  const handleBook = async (m_data) => {
    const token = localStorage.getItem("token");
    const email = token ? JSON.parse(atob(token.split(".")[1])).email : null;
    let updatedOptions = { ...m_data, email: email, forWhom: "Profile" };
    updateSelectedOptions(updatedOptions);
    navigate("/formPage");
  };
  const directBook = async (m_data) => {
    const token = localStorage.getItem("token");
    const email = token ? JSON.parse(atob(token.split(".")[1])).email : null;
    let updatedOptions = { ...m_data, email: email, forWhom: "Profile" };
    updateSelectedOptions(updatedOptions);
    navigate("/directBook");
  };
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const email = token ? JSON.parse(atob(token.split(".")[1])).email : null;
      const response = await fetch("/api/subProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setProfileData(data.data.profiles);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Book For Other Profiles</h1>
      <div className="flex">
        <form>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Age">Age:</label>
              <input
                type="number"
                id="Age"
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <button
                type="button"
                onClick={handleAddProfile}
                className="bg-gray-300 p-2 cursor-pointer"
              >
                <FontAwesomeIcon className="text-2xl" icon={faPlus} />
                Add Profile
              </button>
            </div>
          </div>
        </form>
        <div className="profiles-container">
          {profileData.map((profile, index) => (
            <Profile
              key={index}
              data={profile}
              handleBook={handleBook}
              directBook={directBook}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherProfile;
