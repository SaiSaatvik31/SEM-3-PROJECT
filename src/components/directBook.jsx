import React, { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import DirectBook_modal from "./directBook_modal";
import TextField from "@mui/material/TextField";
import doc_img from "../doc.jpg";
function DirectBook({ selectedOptions, updateSelectedOptions }) {
  console.log(selectedOptions);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/FullDoc", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <>
      <div className="m-5">
        <h1
          className="font-sans text-3xl font-extrabold text-center text-gray-800"
          style={{ fontSize: "1.875rem", color: "#333" }}
        >
          DIRECT DOCTOR BOOKING
        </h1>

        <div
          className="templateContainer"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div
            className="searchContainer"
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            <TextField
              label="Doctor Name"
              variant="outlined"
              fullWidth
              placeholder="Enter Doctor Name"
              style={{ borderRadius: "5px", marginBottom: "10px" }}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="template_container">
            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return true;
                } else if (
                  val.doc_name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((val) => (
                <div className="template" key={val._id}>
                  <div
                    className="bg-emerald-500 mt-4 mb-3 resultCard d-flex flex-row"
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="col-3 ">
                      <div className="text-center mr-5">
                        <img
                          src={doc_img}
                          alt={val.doc_name}
                          className="w-100 text-center"
                          style={{
                            borderRadius: "8px",
                            marginBottom: "10px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="ml-5">
                      {" "}
                      <h1 style={{ fontSize: "24px" }}>
                        Doctor Name: {val.doc_name}
                      </h1>
                      <h2 style={{ fontSize: "18px" }}>
                        Speciality: {val.speciality}
                      </h2>
                      <h3 style={{ fontSize: "16px" }}>
                        Hospital Name: {val.hospital_name}
                      </h3>
                      <DirectBook_modal
                        handleBookNow={() => {
                          handleBookNow(val);
                        }}
                        selectedDoctor={val}
                        updateState={selectedOptions}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DirectBook;
