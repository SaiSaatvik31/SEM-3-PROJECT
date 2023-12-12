// import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
// import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import "../styles/chips.css";
import { Box, Button } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ selectedOptions, updateSelectedOptions }) {
  console.log(selectedOptions);
  const navigate = useNavigate();
  const [chipData, setChipData] = useState([
    { key: 0, label: "Stomach" },
    { key: 1, label: "Skin" },
    { key: 2, label: "General" },
    { key: 3, label: "Bones" },
    { key: 4, label: "Muscle" },
    { key: 5, label: "Excretion" },
    { key: 6, label: "Eyes" },
    { key: 7, label: "Chest" },
    { key: 8, label: "Nose" },
    { key: 9, label: "Mental" },
    { key: 10, label: "Heart" },
    { key: 11, label: "Nails" },
    { key: 12, label: "Mouth" },
    { key: 13, label: "Weight" },
    { key: 14, label: "Throat" },
    { key: 15, label: "Fever" },
    { key: 16, label: "Body Pain" },
    { key: 17, label: "Others" },
  ]);
  const [symptoms, setSymptoms] = useState([]);
  const [activeBodyPart, setActiveBodyPart] = useState([]);
  const [activeSymptoms, setActiveSymptoms] = useState([]);

  let diseases = [
    {
      Stomach: [
        { key: 18, label: "Stomach Pain" },
        { key: 19, label: "Acidity" },
        { key: 20, label: "Swelling Of Stomach" },
        { key: 21, label: "Pain During Bowel Movements" },
        { key: 22, label: "Excessive Hunger" },
        { key: 23, label: "Belly Pain" },
        { key: 24, label: "Stomach Bleeding" },
        { key: 25, label: "Distention Of Abdomen" },
      ],
    },
    {
      Skin: [
        { key: 26, label: "Itching" },
        { key: 27, label: "Skin Rash" },
        { key: 28, label: "Nodal Skin Eruptions" },
        { key: 29, label: "Bruising" },
        { key: 30, label: "Red Spots Over Body" },
        { key: 31, label: "Skin Peeling" },
        { key: 32, label: "Yellowish Skin" },
      ],
    },
    {
      Muscle: [
        { key: 33, label: "Muscle Wasting" },
        { key: 34, label: "Cramps" },
        { key: 35, label: "Muscle Weakness" },
        { key: 36, label: "Muscle Pain" },
      ],
    },
    {
      Excretion: [
        { key: 37, label: "Burning Urination" },
        { key: 38, label: "Spotting Urination" },
        { key: 39, label: "Dark Urine" },
        { key: 40, label: "Yellow Urine" },
        { key: 41, label: "Pain in Anal Region" },
        { key: 42, label: "Bloody Stool" },
        { key: 43, label: "Irritation in Anus" },
        { key: 44, label: "Bladder Discomfort" },
        { key: 45, label: "Foul Smell of Urine" },
        { key: 46, label: "Continuous Feel of Urine" },
        { key: 47, label: "Passage Of Gases" },
        { key: 48, label: "Polyuria" },
        { key: 49, label: "Blood in Sputum" },
        { key: 50, label: "Constipation" },
      ],
    },
    {
      Eyes: [
        { key: 51, label: "Blurred and Distorted Vision" },
        { key: 52, label: "Redness of Eyes" },
        { key: 53, label: "Watering from Eyes" },
        { key: 54, label: "Visual Disturbances" },
        { key: 55, label: "Sunken Eyes" },
        { key: 56, label: "Pain behind the Eyes" },
        { key: 57, label: "Yellowing of Eyes" },
      ],
    },
    {
      Chest: [{ key: 58, label: "Chest Pain" }],
    },
    {
      Nose: [
        { key: 59, label: "Sinus Pressure" },
        { key: 60, label: "Runny Nose" },
        { key: 61, label: "Loss of Smell" },
        { key: 62, label: "Mucoid Sputum" },
        { key: 63, label: "Rusty Sputum" },
        { key: 64, label: "Red Sore around Nose" },
      ],
    },
    {
      Mental: [
        { key: 65, label: "Lack of Concentration" },
        { key: 66, label: "Coma" },
        { key: 67, label: "Anxiety" },
        { key: 68, label: "Mood Swings" },
        { key: 69, label: "Depression" },
        { key: 70, label: "Irritability" },
        { key: 71, label: "Altered Sensorium" },
      ],
    },
    {
      Heart: [
        { key: 72, label: "Fast Heart Rate" },
        { key: 73, label: "Palpitations" },
      ],
    },
    {
      Nails: [
        { key: 74, label: "Brittle Nails" },
        { key: 75, label: "Small Dents in Nails" },
        { key: 76, label: "Inflammatory Nails" },
      ],
    },
    {
      Mouth: [{ key: 77, label: "Ulcers On Tongue" }],
    },
    {
      Weight: [
        { key: 78, label: "Weight Gain" },
        { key: 79, label: "Weight Loss" },
      ],
    },
    {
      Throat: [{ key: 90, label: "Pain In Throat" },
    {key : 120, label : "Throat Irritation"}],
    },
    {
      Fever: [
        { key: 91, label: "High Fever" },
        { key: 92, label: "Mild Fever" },
      ],
    },
    {
      "Body Pain": [
        { key: 93, label: "Abdominal Pain" },
        { key: 94, label: "Back Pain" },
        { key: 95, label: "Neck Pain" },
        { key: 96, label: "Weakness in Limbs" },
        { key: 97, label: "Knee Pain" },
        { key: 98, label: "Hip-Joint Pain" },
        { key: 99, label: "Joint Pain" },
      ],
    },
    {
      General: [
        { key: 100, label: "Continuous Sneezing" },
        { key: 101, label: "Chills" },
        { key: 102, label: "Shivering" },
        { key: 103, label: "Vomiting" },
        { key: 104, label: "Fatigue" },
        { key: 105, label: "Cough" },
        { key: 106, label: "Sweating" },
        { key: 107, label: "Dehydration" },
        { key: 108, label: "Indigestion" },
        { key: 109, label: "Headache" },
        { key: 110, label: "Nausea" },
        { key: 111, label: "Loss of Appetite" },
        { key: 112, label: "Dizziness" },
        { key: 113, label: "Increased Appetite" },
        { key: 114, label: "Swollen Legs" },
        { key: 115, label: "Breathelessness" },
        { key: 117, label: "Irregular Sugar Level" },
      ],
    },
    {
      Others: [
        { key: 116, label: "Extra-Marital Contacts" },
        // { key: 118, label: "BP" },
        { key: 119, label: "Abnormal Menstruation" },
      ],
    },
  ];

  const getSymptomForBodyPart = (bodyPart) => {
    const selectedDisease = diseases.find(
      (disease) => Object.keys(disease)[0] === bodyPart
    );
    return selectedDisease ? selectedDisease[bodyPart] : [];
  };

  //   const [activeSymptoms, setActiveSymptoms] = useState(diseases)
  const handleBodyPart = (partSelected) => () => {
    setActiveBodyPart((prevPart) => [...prevPart, partSelected]);
    console.log(activeBodyPart);

    const symptomsForBodyPart = getSymptomForBodyPart(partSelected.label);
    setActiveSymptoms(symptomsForBodyPart.map((symptom) => ({ ...symptom })));
    document.getElementById("choose-symptoms").innerHTML =
      activeBodyPart && "Please Select Symptoms";
  };
  // const handleBodyPart=(part)=>{
  //     setActiveBodyPart(part)
  // }

  const handleDelete = (chipToDelete) => () => {
    setSymptoms((symptoms) =>
      symptoms.filter((symptom) => symptom.key !== chipToDelete.key)
    );
    console.log(symptoms);
    const updatedOptions = {
      ...selectedOptions,
      symptoms: symptoms.filter((symptom) => symptom.key !== chipToDelete.key),
    };
    updateSelectedOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const handleClick = (chipSelected) => () => {
    if (!symptoms.some((symptom) => symptom.key === chipSelected.key)) {
      setSymptoms((prevSymptoms) => [...prevSymptoms, chipSelected]);

      // Update selectedOptions with the new symptoms
      const updatedOptions = {
        ...selectedOptions,
        symptoms: [...symptoms, chipSelected],
      };
      updateSelectedOptions(updatedOptions);
      console.log(updatedOptions);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const selectedSymptoms = symptoms.map((symptom) => symptom.key);
    // Show loading indicator while waiting for response
    console.log(symptoms);
    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: symptoms }),
      });

      const data = await response.json();

      // Update UI with received data
      const diseaseNameElement = document.getElementById("value");
      diseaseNameElement.innerText = data.value;
      console.log(diseaseNameElement.innerText);
      const updatedOptions = {
        ...selectedOptions,
        speciality: diseaseNameElement.innerText,
      };
      updateSelectedOptions(updatedOptions);
      console.log(updatedOptions);
      navigate("/userInfo", { state: updatedOptions });
      // Update other elements if needed

      // Hide loading indicator
    } catch (error) {
      console.error("Error:", error);
    }
  };

  <div>
    Rey idiot
    <h1 id="value1">hello</h1>
  </div>;
  return (
    <Box component={"div"} className="chip-container">
      <Box component={"div"} className="selected-chip-container">
        <h3>Selected Symptoms</h3>
        <form action="/predict" onSubmit={handleSubmit} method="post">
          <ul>
            {symptoms.map((symptom) => {
              return (
                <ListItem key={symptom.key}>
                  <Chip
                    className="selectedChips"
                    color="primary"
                    //   onClick={handleClick(data)}
                    label={symptom.label}
                    onDelete={handleDelete(symptom)}
                  />
                </ListItem>
              );
            })}
          </ul>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
      <Box component={"div"} className="body-parts-container">
        <h3>Body Parts</h3>
        <ul>
          {chipData.map((data) => {
            return (
              <ListItem key={data.key}>
                <Chip
                  size="medium"
                  className="showChips"
                  color="secondary"
                  onClick={handleBodyPart(data)}
                  label={data.label}
                  //   onDelete={handleDelete(data)}
                />
              </ListItem>
            );
          })}
        </ul>
      </Box>
      <Box component={"div"} className="chip-show-container">
        <h3 id="choose-symptoms">Please Select A Body Part First</h3>
        <ul>
          {activeSymptoms.map((symptom) => {
            return (
              <ListItem key={symptom.key}>
                <Chip
                  size="medium"
                  color="secondary"
                  onClick={handleClick(symptom)}
                  label={symptom.label}
                />
              </ListItem>
            );
          })}
        </ul>
      </Box>
      <div>
        Amogh
        <br />
        <b id="value">hello</b>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      {/* <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
    }}
      component="ul" */}
      {/* > */}
      {/* </Paper> */}
    </Box>
  );
}
