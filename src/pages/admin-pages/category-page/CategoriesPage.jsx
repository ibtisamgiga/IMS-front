import React, { useState } from "react";
import SearchField from "../../../components/shared/SearchField";
import SelectField from "../../../components/shared/SelectField";
import MyTables from "../../../components/shared/MyTable";
import StartIconButton from "../../../components/shared/StartIconButton";
import { useTheme, useMediaQuery } from "@mui/material";
import ExapndableTable from "../../../components/shared/ExapndableTable";
import CollapsibleTable from "../../../components/shared/CollaspableTable";

function CategoriesPage() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const Data = [
    {
      id: 1,
      name: "stationary",
      description: 8,
      category:9,
      arr:[{s:'mouse1', v:4 ,q:1}]
    },

    {
      id: 2,
      name: "furniture",
      description: 5,
      category: 6,
      arr:[{s:'mous1e', v:4 ,q:1}]
    },
    {
      id: 3,
      name: "electronics",
      description: 2,
      category: 4,
      arr:[{s:'mouse2', v:4 ,q:1}]
    },
  ];
  const header = [
    "ID",
    "Category Name",
    "Number of Sub-Categories",
    "Number of Vendors",
    "Action",
    " ",
    " "
  ];

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
      {" "}
      <div className={isMatch ? "uppersection-md" : "uppersection"}>
        <div>
          <h1>Categories</h1>
        </div>
        <SearchField setSearchData={handleSearch} />

        <StartIconButton
          title={"Add Category"}
          width={10}
          to={"/category/create"}
        />
      </div>
      {/* <ExapndableTable
        data={filteredData}
        tableHeaders={header}
        createData={(Data) => {
          return { ...Data };
        }}
        routes={"/inventory/detail"}
      /> */}
      <CollapsibleTable/>
    </div>
  );
}

export default CategoriesPage;
