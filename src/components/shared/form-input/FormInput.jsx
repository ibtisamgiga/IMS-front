import React from "react";
import "./form-input.css";
import { Typography, TextField } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

function FormInput({ sideLabel, placeHolder, multiLine, onChange, value, id }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={isMatch ? "form-input-md" : "form-input"}>
      <Typography variant="p" component="h6" sx={{ fontSize: "110%" }}>
        {sideLabel}
      </Typography>
      {multiLine ? (
        <textarea
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          required
        ></textarea>
      ) : (
        <input
          id={id}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
}
FormInput.defaultProps = {
  multiLine: false,
};

export default FormInput;
