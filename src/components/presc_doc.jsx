import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "../styles/presc.css";
export default function D_prescribe({name}) {
  const [date, setDate] = useState(new Date())

useEffect(()=>{
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
  setDate(formattedDate)
})

  console.log(name);
  const hospital = {
    A: "Apollo",
    B: "TrustCure",
    C: "Kaminenei",
  };
  function display() {
    const newData = { ...formData, ...medications, labTests, date };

    // console.log(
    //     formData,
    //     medications ,
    //     labTests,)
    console.log(newData);
  }

  // State to keep track of the checked radio button
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler function to update the selected option
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const handleInputChange = (event, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };
  //  console.log(formData)

  const [medications, setMedications] = useState([]);

  const addMedication = () => {
    const newMedication = {
      // Medication: '',
      times: {
        morning: false,
        afternoon: false,
        night: false,
      },
      meal: "",
    };
    setMedications([...medications, newMedication]);
  };

  const handleInputtChange = (index, field, value) => {
    const newMedications = [...medications];
    newMedications[index][field] = value;
    setMedications(newMedications);
  };

  const handleCheckboxChange = (index, time) => {
    const newMedications = [...medications];
    newMedications[index].times[time] = !newMedications[index].times[time];
    setMedications(newMedications);
  };

  const handleRemoveMedication = (index) => {
    const newMedications = [...medications];
    newMedications.splice(index, 1);
    setMedications(newMedications);
  };

  const handleDisplayData = () => {
    // console.log('All Medication Data:', medications);
  };
  const [labTests, setLabTests] = useState([{ testName: "" }]);

  const handleAddField = () => {
    setLabTests([...labTests, { testName: "" }]);
  };

  const handleInputlabChange = (index, value) => {
    const newLabTests = [...labTests];
    newLabTests[index].testName = value;
    setLabTests(newLabTests);
  };

  const handleRemoveField = (index) => {
    const newLabTests = [...labTests];
    newLabTests.splice(index, 1);
    setLabTests(newLabTests);
  };

  const handleDisplaylabData = () => {
    // console.log('Lab Tests Data:', labTests);
  };
  // const [date, setDate] = useState("");

  const datechange = (e) => {
    const tdate = e.target.value;
    setDate(tdate);
    setDate(tdate.toString());
    //  console.log(tdate)
  };

  return (
    <>
      <div className="contain">
        <div className="header">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>Trust Cure Group of Hospitals </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              You Trust <cite title="Source Title">We Care</cite>
            </figcaption>
          </figure>
        </div>
        <div className="body">
          <div className="bodyhead">
            <div className="row">
              <div className="col-sm-5 col-md-8 ">
                {" "}
                <h3>Medical Prescription form</h3>
              </div>
              <div className="col-sm-5 offset-sm-2 col-md-2 offset-md-0">
                <h3>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-hospital"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                    <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
                  </svg>{" "}
                  {hospital.A}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-8 input">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Age
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={formData.age}
                onChange={(e) => handleInputChange(e, "age")}
              />
            </InputGroup>
            {/* <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Gender  <div className="form-gen"> 

    </div>
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        /> */}
            {/* </InputGroup> */}
            <div className="gender">
              <h5>Gender</h5>
            </div>

            <h3>Prescription:</h3>

            {/* <div className="med"> */}

            <div>
              {medications.map((medication, index) => (
                <div key={index}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Medication
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      value={medication.name}
                      onChange={(e) =>
                        handleInputtChange(index, "name", e.target.value)
                      }
                    />
                  </InputGroup>

                  <Form>
                    {["morning", "afternoon", "night"].map((time) => (
                      <div
                        key={`inline-${time}`}
                        className="mb-3  d-flex align-items-center"
                      >
                        <Form.Check
                          inline
                          label={time.charAt(0).toUpperCase() + time.slice(1)}
                          name={`time-${index}`}
                          type="checkbox"
                          checked={medication.times[time]}
                          onChange={() => handleCheckboxChange(index, time)}
                          id={`inline-${time}-${index}`}
                        />
                      </div>
                    ))}
                  </Form>

                  <Form>
                    {["After Meal", "Before Meal"].map((meal) => (
                      <div key={`inline-${meal}`} className="mb-3">
                        <Form.Check
                          inline
                          label={meal}
                          name={`meal-${index}`}
                          type="radio"
                          checked={medication.meal === meal}
                          onChange={() =>
                            handleInputtChange(index, "meal", meal)
                          }
                          id={`inline-${meal}-${index}`}
                        />
                      </div>
                    ))}
                  </Form>
                  <button
                    type="button"
                    className=" button mb-3 buttons"
                    onClick={() => handleRemoveMedication(index)}
                  >
                    Remove Medication
                  </button>

                  {/* <button onClick={() => handleRemoveMedication(index)}>Remove</button> */}
                </div>
              ))}

              {/* <button onClick={handleDisplayData}>Display Data</button> */}
              {/* </div> */}
            </div>

            <button
              type="button"
              className=" button mb-3 buttons"
              onClick={addMedication}
            >
              Add Medication
            </button>

            <InputGroup className="mb-3" />
            {/* <InputGroup.Text id="inputGroup-sizing-default"/> */}
            {/* <p>Lab Tests</p> */}
            <div>
              {labTests.map((test, index) => (
                <div key={index}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Lab Tests
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      value={test.testName}
                      onChange={(e) =>
                        handleInputlabChange(index, e.target.value)
                      }
                    />
                  </InputGroup>

                  {/* <button type="button" className="btn btn-info button mb-3" onClick={() => handleRemoveField(index)}>Remove Lab Tests</button> */}
                </div>
              ))}

              {/* <button onClick={handleAddField}>Add Lab Test</button>
      <button onClick={handleDisplayData}>Display Data</button> */}
            </div>
            {/* <button type="button" className="btn btn-info button mb-3" onClick={handleAddField}>Add Lab Tests</button> */}
            <div className="input-group mb-3  inputs">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Signature
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group mb-3  inputs">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Date{" "}
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={date}
                // onChange={datechange}
              />
            </div>
            <div>
              <button
                type="button"
                className=" saveForm buttons"
                onClick={display}
              >
                Save form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
