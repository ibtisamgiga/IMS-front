import { Divider, Typography } from "@mui/material";
import React from "react";
import DetailHeader from "../../../components/shared/details-header/DetailHeader";
import ImageText from "../../../components/shared/image-with-text/ImageText";
import LabelText from "../../../components/shared/text-with-label/LabelText";
import "./inventory-detail.css";
function InventoryDetailPage() {
  return (
    <div className="body">
      <DetailHeader />
      <div className="row">
        <LabelText label={"Item Name"} content={"Macbook"} />
        <LabelText label={"Serial Number"} content={"12356TY"} />
      </div>
      <LabelText
        label={"Description"}
        content={
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        }
      />
      <LabelText label={"Category"} content={"Electronics"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <LabelText label={"Sub-Category"} content={"Mouse"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <LabelText label={"Date Of Purchase"} content={"11/12/21"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <LabelText label={"Unit Price"} content={"50"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <LabelText label={"Current Price"} content={"100"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <div className="row">
        <LabelText label={"Depreciated Price"} content={"50"} />
        <LabelText label={"Percentage Depreciation"} content={"50%"} />
      </div>
      <Typography
        variant="h5"
        component={"h1"}
        sx={{ fontWeight: "bold", marginTop: "2%" }}
      >
        Vendor
      </Typography>
      <LabelText label={"Name"} content={"Game-Over"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <LabelText label={"Contact Number"} content={"04526242363"} />
      <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
      <Typography
        variant="h5"
        component={"h1"}
        sx={{ fontWeight: "bold", marginTop: "2%" }}
      >
        Assigined To
      </Typography>
      <ImageText
        name={"Empery Siphron"}
        email={"ali@gmail.com"}
        number={"02345677537"}
      />
    </div>
  );
}

export default InventoryDetailPage;
