import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ margin: "20px" }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;