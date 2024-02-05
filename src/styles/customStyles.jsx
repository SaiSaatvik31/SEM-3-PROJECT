import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textField: {
    "& .MuiInputBase-root": {
      fontSize: "18px",
      color: "#000",
      background: "transperant",
    },
    "& .MuiInputLabel-outlined": {
      color: "#000",
      background: "transperant",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
      borderColor: "#000",
      color: "grey",
    },
    "& .Mui-focused": {
      color: "#000",
      fontSize: "18px",
      background: "transperant",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#000",
    },

    "& .MuiInputBase-input": {
      backgroundColor: "transparent", // Set the background color of the input
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused": {
        // Customize the focused state if needed
        borderColor: "transparent",
      },
    },
    // outline : 'none',
    // label:'black'
  },
  // button : {
  //     width: '100%',
  //     height:'45px',
  //     backgroundColor:'#fff',
  //     border:'none',
  //     outline:'none',
  //     borderRadius:'40px',
  //     boxShadow:' 0 0 10px rgba(0,0,0,.1)',
  //     cursor:'pointer',
  //     color:'#333',
  //     fontWeight:'700',
  // }
});

export default useStyles;
