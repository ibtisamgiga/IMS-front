import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function StartIconButton({ title, icon, to, width ,onClick,left}) {
  const myWidth = width ? width + "%" : "100px";

  const style = {
    background: "#2ab38e",
    padding: "15px",
    width: myWidth,
    borderRadius: "10px",
    position: "absolute",
    right: "0",
  };
  const style2 = {
    background: "#2ab38e",
    padding: "15px",
    width: myWidth,
    borderRadius: "10px",
    position: "absolute",
    left: "0",
    bottom:'0',
    marginLeft:'2%'
  };
  return (
    <Button
      component={Link}
      sx={left?style2:style}
      variant="contained"
      startIcon={<AddIcon />}
      to={to}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
//<AddIcon />
