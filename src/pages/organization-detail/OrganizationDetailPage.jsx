import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DetailHeader from "../../components/shared/details-header/DetailHeader";
import ImageText from "../../components/shared/image-with-text/ImageText";
import LabelText from "../../components/shared/text-with-label/LabelText";
import TabsVertical from "../../components/shared/verticat-tabs/TabVertical";
import MyTables from "../../components/shared/MyTable";

function OrganizationDetailPage() {
  const [index, setIndex] = React.useState(0);
  const Data = [
    {
      id: 1,
      image:
        "https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png",
      name: "zain",
      organization: "gigalabs",
      email: "hello@gmail.com",
      number: "923342251274",
    },

    {
      id: 2,
      image:
        "https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png",
      name: "mustafa",
      organization: "I2C",
      email: "next@gmail.com",
      number: "11111122222222",
    },
    {
      id: 3,
      image:
        "https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png",
      name: "Ali",
      organization: "tanbits",
      email: "next@gmail.com",
      number: "11111122222222",
    },
  ];
  const header = [
    "ID",
    "Image",
    "Name",
    "Organization",
    "Email",
    "Contact No.",
    "Action",
  ];
  return (
    <div className="body">
      <DetailHeader />
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: "4px", marginTop: "20px" }}
      />
      <Box sx={{ display: "flex" }}>
        <TabsVertical
          tab1={"General Information"}
          tab2={"Admins"}
          index={index}
          onChange={(event, value) => setIndex(value)}
        />
        {index == 0 ? (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ImageText name={"Giga Labs Pvt"} email={"galabs@gmail.com"} />
            <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />

            <LabelText
              label={"Bio"}
              content={
                "lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum"
              }
            />
            <LabelText label={"Address"} content={"abc lahore pakistan"} />
            <LabelText label={"Representative Name"} content={"John Doe"} />
            <LabelText
              label={"Representative Contact No"}
              content={"03425617382"}
            />
          </Box>
        ) : (
          <Box sx={{ width: "70%", marginLeft: "4%" }}>
            <MyTables
              data={Data}
              tableHeaders={header}
              createData={(Data) => {
                return { ...Data };
              }}
              routes={"/admin/detail"}
            />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default OrganizationDetailPage;
