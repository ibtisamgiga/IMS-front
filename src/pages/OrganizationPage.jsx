import React, { useState } from "react";
import SearchField from "../components/shared/SearchField";
import SelectField from "../components/shared/SelectField";
import StartIconButton from "../components/shared/StartIconButton";
import MyTables from "../components/shared/MyTable";
import AddIcon from "@mui/icons-material/Add";
import { useTheme, useMediaQuery } from "@mui/material";

function OrganizationPage() {
  const Data = [
    {
      id: 1,
      image: "https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png",
      name: "Gigalabs",
      location: "lahore,pakistan",
      email: "hello@gmail.com",
      number: "923342251274",
     // view: "/dashboard",
    },

    {
      id: 2,
      image: "https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png",
      name: "nextBridge",
      location: "islamabad,pakistan",
      email: "next@gmail.com",
      number: "11111122222222",
     // view: "/complains",
    },
    {
      id: 3,
      image: "https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png",
      name: "nextBridge",
      location: "lahore,pakistan",
      email: "next@gmail.com",
      number: "11111122222222",
     // view: "/complains",
    },
  ];
  const header = [
    "ID",
    "Image",
    "Name",
    "Location",
    "Email",
    "Contact No.",
    "Action",
  ];

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [filteredData, setFilteredData] = useState(Data);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    const filteredRows = Data.filter((row) => {
      let shouldInclude = false;
      Object.values(row).forEach((value) => {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          shouldInclude = true;
        }
      });
      return shouldInclude;
    });
    setFilteredData(filteredRows);
  };

  return (
    <div className="body">
      <div className={isMatch ? "uppersection-md" : "uppersection"}>
        <div>
          <h1>Organizations</h1>
        </div>
        <SearchField setSearchData={handleSearch} />
        <SelectField
          fieldName={"Location"}
          items={["Lahore", "Islamabad"]}
          handleSelect={handleSearch}
        />
        <StartIconButton title={"add"} to="/create/organization" />
      </div>
      <MyTables
        data={filteredData}
        tableHeaders={header}
        createData={(Data) => {
          return { ...Data };
        }}
        routes={'/organization/detail'}
      />
    </div>
  );
}

export default OrganizationPage;
