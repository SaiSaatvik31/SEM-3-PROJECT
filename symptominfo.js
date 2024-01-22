import { useState, useEffect } from 'react';
import Data from './Symptoms description.csv';
import Papa from 'papaparse';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // parse CSV data & store it in the component state

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     header: true,
  //     complete: (results) => {
  //       setData(results.data);
  //     },
  //   });
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, { 
        header: true, 
        skipEmptyLines: true 
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((row) => {
    const searchString = searchTerm.toLowerCase();
    return row.Symptom.toLowerCase().includes(searchString) ||
      row.Description.toLowerCase().includes(searchString);
  });


  return (
    <div className="App" bg-dark>
       <input
        type="text"
        placeholder="Search symptoms..."
        onChange={handleSearchChange}
      />

      {/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}

      {data.length ? (
        <table className="table">
         <tbody>
  {filteredData.length > 0 ? (
    filteredData.map((row, index) => (
      <tr key={index}>
        <td>{row.Symptom}</td>
        <td>{row.Description}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td>No symptoms found for your search.</td>
    </tr>
  )}
</tbody>
        </table>
      ) : null}
    </div>
  );
}

export default App;