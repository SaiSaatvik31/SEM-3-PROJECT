import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChooseBook from "./chooseBook";

const Profile = ({ data, handleBook, directBook, handleDelete }) => (
  <div className="profile-container bg-blue-200 p-4 mb-4 m-3 rounded-md">
    <h1>Profile</h1>
    <p>Name: {data.name}</p>
    <p>Age: {data.Age}</p>
    <p>Gender: {data.gender}</p>
    <p>
      Delete Profile{" "}
      <FontAwesomeIcon
        className="hover:cursor-pointer"
        onClick={() => {
          handleDelete(data.id);
        }}
        icon={faTrash}
      />
    </p>
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
    const randomNum = getRandomInt(1, 999999);
    const newProfile = { ...formData, id: randomNum };
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/deleteSubProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const updatedProfileData = profileData.filter(
          (profile) => profile.id !== id
        );
        setProfileData(updatedProfileData);
      } else {
        console.error("Failed to delete profile");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
      <div className="m-3 ml-5">
        <h1 className="text-2xl font-bold mb-4">Book For Other Profiles</h1>
        <div className="flex">
          <form className="bg-gray-100 p-4 rounded">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Age"
                className="block text-sm font-medium text-gray-600"
              >
                Age:
              </label>
              <input
                type="number"
                id="Age"
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-600"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <button
                type="button"
                onClick={handleAddProfile}
                className="bg-gray-300 p-2 cursor-pointer rounded"
              >
                <FontAwesomeIcon className="text-2xl" icon={faPlus} />
                Add Profile
              </button>
            </div>
          </form>
          <div className="flex flex-wrap m-5">
            {profileData.map((profile, index) => (
              <Profile
                key={index}
                data={profile}
                handleBook={handleBook}
                directBook={directBook}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProfile;
