import React from "react";
import { useState } from "react";
function Form() {
  const [text, setText] = useState("");
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <form>
        <h1 className="mt-5">{text}</h1>
        <input
          onChange={onChangeHandler}
          className="form-control"
          type="text"
        />
      </form>
    </>
  );
}
export default Form;

