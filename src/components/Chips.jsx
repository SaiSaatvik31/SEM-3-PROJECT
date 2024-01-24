// import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
// import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../styles/chips.css";
import { Box, Button } from "@mui/material";
import ModelViewer from "./ModelViewer[1]";
import Body_model from "./body_model";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ selectedOptions, updateSelectedOptions }) {
  console.log(selectedOptions);
  const navigate = useNavigate();
  const [showSymptoms, setShowSymptoms] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [chipData, setChipData] = useState([
    { key: 0, label: "Stomach" },
    { key: 1, label: "Skin" },
    { key: 2, label: "General" },
    // { key: 3, label: "Bones" },
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
  const [useModal, setUseModal] = useState(true);
  const [bodyName, setBodyName] = useState();
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
      Throat: [
        { key: 90, label: "Pain In Throat" },
        { key: 120, label: "Throat Irritation" },
      ],
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
  const [selectedFromShowContainer, setSelectedFromShowContainer] =
    useState(false);
  const getSymptomForBodyPart = (bodyPart) => {
    const selectedDisease = diseases.find(
      (disease) => Object.keys(disease)[0] === bodyPart
    );
    return selectedDisease ? selectedDisease[bodyPart] : [];
  };

  const handleBodyPart = (partSelected) => () => {
    // Update activeBodyPart
    setActiveBodyPart((prevPart) => [...prevPart, partSelected]);

    const symptomsForBodyPart = getSymptomForBodyPart(partSelected.label);
    setActiveSymptoms(symptomsForBodyPart.map((symptom) => ({ ...symptom })));

    setShowSymptoms(true);
    setBodyName(partSelected.label);
  };

  const handleSymptomSelection = (symptomSelected) => () => {
    // Check if the symptom is already in symptoms
    const symptomInSymptoms = symptoms.some(
      (symptom) => symptom.label === symptomSelected.label
    );

    // Update symptoms only if the symptom is not already present
    if (!symptomInSymptoms) {
      setSymptoms((prevSymptoms) => [
        ...prevSymptoms,
        { key: symptomSelected.key, label: symptomSelected.label },
      ]);
    }
  };
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
    setSelectedFromShowContainer(true);

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

    console.log(symptoms);
    try {
      const response = await fetch("/flask/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { data: symptoms },
          { gender: selectedOptions.Age }
        ),
      });

      const data = await response.json();
      console.log(data);
      // Update UI with received data

      let updatedOptions = {
        ...selectedOptions,
        speciality: data.value,
        department: data.output,
        doct_list: data.doctor_list,
        hospitals_list: data.hospitals_list,
        time_list: data.time,
        rating: data.rating,
        slot: data.slot,
        dayName: data.dayName,
        amt: data.amt,
      };
      updateSelectedOptions(updatedOptions);
      console.log("checking:");
      console.log(updatedOptions);
      navigate("/bookSelec", { state: updatedOptions });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleBodyPartClick = (part_name) => {
    const selectedBodyPart = chipData.find((data) => data.label === part_name);
    if (selectedBodyPart) {
      handleBodyPart(selectedBodyPart)();
    }
    setSelectedBodyPart(part_name);
  };
  const handleSelection = (selectedItem) => () => {
    if (selectedItem.type === "bodyPart") {
      // Handle body part selection
      setActiveBodyPart((prevPart) => [...prevPart, selectedItem]);
      const symptomsForBodyPart = getSymptomForBodyPart(selectedItem.label);
      setActiveSymptoms(symptomsForBodyPart.map((symptom) => ({ ...symptom })));
      setShowSymptoms(true);
      setBodyName(selectedItem.label);
    } else if (selectedItem.type === "symptom") {
      // Handle symptom selection
      const symptomInSymptoms = symptoms.some(
        (symptom) => symptom.label === selectedItem.label
      );

      // Update symptoms only if the symptom is not already present
      if (!symptomInSymptoms) {
        setSymptoms((prevSymptoms) => [
          ...prevSymptoms,
          { key: selectedItem.key, label: selectedItem.label },
        ]);
      }
    }
  };
  <h1 id="value1">hello</h1>;

  return (
    <>
      <Box component={"div"} className="chip-container bg-dark">
        <div className="flex flex-row">
          <ModelViewer useModal={true} height="300" width="400" />
          <Box component={"div"} className="body-parts-container">
            <h3 className="font-bold">Body Parts</h3>
            <ul>
              {chipData.map((data) => (
                <ListItem key={data.key}>
                  <Chip
                    size="medium"
                    className="showChips"
                    color="secondary"
                    onClick={handleSelection({
                      type: "bodyPart",
                      key: data.key,
                      label: data.label,
                    })}
                    label={data.label}
                  />
                </ListItem>
              ))}
            </ul>
            <p className="ml-5 text-white">
              Selected Body Part Name : {bodyName}
            </p>
          </Box>
        </div>
        <div>
          <Box component={"div"} className="selected-chip-container">
            <h3 className="font-bold">Selected Symptoms</h3>

            <form action="/predict" onSubmit={handleSubmit} method="post">
              <ul>
                {/* Mapping through symptoms */}
                {symptoms.map((symptom) => (
                  <motion.li
                    className="m-2"
                    key={symptom.key}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Chip
                      key={symptom.key}
                      className="selectedChips"
                      color="primary"
                      label={symptom.label}
                      onDelete={handleDelete(symptom)}
                    />
                  </motion.li>
                ))}
              </ul>

              <Button type="submit">Submit</Button>
            </form>
          </Box>
        </div>
        <div className="flex flex-row mt-0">
          <div className="col-6">
            <Body_model
              className="mt-0"
              handleBodyPartClick={handleBodyPartClick}
            />
          </div>
          <Box component={"div"} className="chip-show-container ">
            <h3 className="font-bold" id="choose-symptoms">
              Please Select A Body Part First
            </h3>
            <AnimatePresence>
              {showSymptoms && (
                <motion.ul
                  key="symptom-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {activeSymptoms.map((symptom) => (
                    <motion.li
                      className="ml-3 mb-2"
                      key={symptom.key}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <Chip
                        size="medium"
                        color="secondary"
                        onClick={handleClick(symptom)}
                        label={symptom.label}
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </Box>
        </div>
      </Box>
    </>
  );
}
