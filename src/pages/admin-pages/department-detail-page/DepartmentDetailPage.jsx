import React from "react";
import DetailHeader from "../../../components/shared/details-header/DetailHeader";
import ImageText from "../../../components/shared/image-with-text/ImageText";
import { Divider, Typography } from "@mui/material";
import dp from "../../../components/shared/image-with-text/dummy";
import LabelText from "../../../components/shared/text-with-label/LabelText";
function DepartmentDetailPage() {
  return (
    <div className="body">
      <DetailHeader heading={"Department Detail"} />
      <LabelText label={"Department Name"} content={"HR"} />
      <LabelText label={"Department Email"} content={"hr@gmail.com"} />
      <LabelText label={"Department Number"} content={"08132453462"} />
      <Typography variant="h5" component={"h1"} sx={{ fontWeight: "bold" }}>
        Organization
      </Typography>
      <ImageText name={"Giga Labs Pvt"} email={"galabs@gmail.com"} />
      <LabelText label={"Representative Name"} content={"John Doe"} />
      <LabelText label={"Representative Contact No"} content={"03425617382"} />
    </div>
  );
}

export default DepartmentDetailPage;
