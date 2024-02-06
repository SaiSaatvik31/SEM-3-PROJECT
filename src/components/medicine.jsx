import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
function Medicine() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedData, setCheckedData] = useState([]);
  const [totalRate, setTotalRate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/medicine", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const m_data = await response.json();
        console.log(m_data);

        setData(m_data.data);
        setFilteredData(m_data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = data.filter((item) =>
      item.medicine.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleCheckboxChange = (id, rate) => {
    const isChecked = checkedItems.includes(id);
    const updatedCheckedItems = isChecked
      ? checkedItems.filter((item) => item !== id)
      : [...checkedItems, id];
    setCheckedItems(updatedCheckedItems);

    const updatedCheckedData = isChecked
      ? checkedData.filter((item) => item.id !== id)
      : [...checkedData, { id, rate }];
    setCheckedData(updatedCheckedData);
  };

  const handleShowCheckedData = () => {
    let sum = 0;
    console.log(checkedData);
    checkedData.forEach((item) => {
      sum += parseFloat(item.rate);
    });
    setTotalRate(sum);
    console.log("Checked Data:", checkedData);
    console.log("Total Rate:", totalRate);
  };

  return (
    <div className="App ml-5">
      <TextField
        className="mt-5"
        value={searchTerm}
        id="outlined-basic"
        label="Medicine"
        variant="outlined"
        placeholder="Search medicine..."
        onChange={handleSearchChange}
      />
      {checkedData.length > 0 && (
        <div>
          <h2>Checked Data:</h2>
          <ul>
            {checkedData.map((item, index) => (
              <li key={index}>{`ID: ${item.id}, Rate: ${item.rate}`}</li>
            ))}
          </ul>
          <p>Total Rate: {totalRate}</p>
        </div>
      )}
      <Button
        className="ml-5 m-5"
        variant="contained"
        color="success"
        onClick={handleShowCheckedData}
      >
        Submit
      </Button>
      {filteredData.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>MEDICINE</th>
              <th>PRICE</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.medicine}</td>
                <td>{row.rate}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id, row.rate)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Medicine;
