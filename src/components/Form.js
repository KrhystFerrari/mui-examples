import React, { useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    stacks: "",
    gender: "",
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
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel id="menu">Stacks</InputLabel>
          <Select
            label="stacks"
            value={inputs.stacks}
            onChange={handleChange}
            name="stacks"
          >
            <MenuItem value={"next"}>Next.js</MenuItem>
            <MenuItem value={"express"}>Express.js</MenuItem>
            <MenuItem value={"nest"}>Nest.js</MenuItem>
            <MenuItem value={"mui"}>Material UI</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl sx={{margin: '20px'}}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handleChange}>
            <FormControlLabel value={'male'} label='Male' control={<Radio />} />
            <FormControlLabel value={'female'} label='Female' control={<Radio />} />
            <FormControlLabel value={'other'} label='Other' control={<Radio />} />
          </RadioGroup>
        </FormControl>
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
