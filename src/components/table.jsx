import React from "react";

const TableComponent = ({ doctorList, hospitalList, speciality }) => {
  console.log(doctorList);
  const tableData = [
    {
      id: 1,
      DepName: "cardio",
      Hospital: "Nova",
      waitingTime: "0 sec",
    },
  ];

  return (
    <div>
      <table border="1px solid #ddd">
        <thead
          style={{
            fontSize: "20px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#4285F4 ",
            color: "white",
          }}
        >
          <tr>
            <th className="p-2" style={{ borderRight: "1px solid #ddd" }}>
              S.No
            </th>
            <th className="p-2" style={{ borderRight: "1px solid #ddd" }}>
              Department Name
            </th>
            <th className="p-2" style={{ borderRight: "1px solid #ddd" }}>
              Available Doctor List
            </th>
            <th className="p-2" style={{ borderRight: "1px solid #ddd" }}>
              Hospital Name
            </th>
            <th className="p-2" style={{ borderRight: "1px solid #ddd" }}>
              Waiting Time
            </th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#F9FAFB " }}>
          {tableData.map((row) => (
            <tr
              key={row.id}
              style={{ borderBottom: "1px solid #ddd", fontSize: "15px" }}
            >
              <td style={{ borderRight: "1px solid #ddd" }}>{row.id}</td>
              <td style={{ borderRight: "1px solid #ddd" }}>{speciality}</td>
              <td style={{ borderRight: "1px solid #ddd" }}>
                <td>
                  <ul>
                    {doctorList.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                </td>
              </td>
              <td style={{ borderRight: "1px solid #ddd" }}>
                <td>
                  <ul>
                    {hospitalList.map((element,index)=>(
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                  </td>
              </td>
              <td style={{ borderRight: "1px solid #ddd" }}>
                {row.waitingTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableComponent;
