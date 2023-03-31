import React, { useState } from "react";
import SearchField from "../../../components/shared/SearchField";
import SelectField from "../../../components/shared/SelectField";
import MyTables from "../../../components/shared/MyTable";
import StartIconButton from "../../../components/shared/StartIconButton";
import { useTheme, useMediaQuery } from "@mui/material";
function InventoryPage() {
  const Data = [
    {
      id: 1,
      name: "mouse",
      description: "lorem ispsum lorem ispsum lorem ispsum lorem ispsum",
      category: "electronics",
      subCategory: "MOUSE",
      price: 1234,
    },

    {
      id: 2,
      name: "chair",
      description: "lorem ispsum lorem ispsum lorem ispsum lorem ispsum",
      category: "furniture",
      subCategory: "CHAIR",
      price: 127,
    },
    {
      id: 3,
      name: "head-phone",
      description: "lorem ispsum lorem ispsum lorem ispsum lorem ispsum",
      category: "electronics",
      subCategory: "Wearables",
      price: 4000,
    },
  ];
  const header = [
    "ID",
    "Item Name",
    "Description",
    "Category",
    "Sub-category",
    "Price",
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
          <h1>Inventory</h1>
        </div>
        <SearchField setSearchData={handleSearch} />
        <SelectField
          fieldName={"Category"}
          items={["furniture", "electronics"]}
          handleSelect={handleSearch}
        />
        <SelectField
          fieldName={"Sub-Category"}
          items={["mouse", "chair"]}
          handleSelect={handleSearch}
        />
        <StartIconButton title={"Add Item"} width={7} to={"/inventory/create"} />
      </div>
      <MyTables
        data={filteredData}
        tableHeaders={header}
        createData={(Data) => {
          return { ...Data };
        }}
        routes={"/inventory/detail"}
      />
    </div>
  );
}

export default InventoryPage;
