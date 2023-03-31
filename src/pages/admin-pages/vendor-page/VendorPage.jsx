import React from 'react'
import { useState } from "react";
import SearchField from "../../../components/shared/SearchField";
import SelectField from "../../../components/shared/SelectField";
import StartIconButton from "../../../components/shared/StartIconButton";
import MyTables from '../../../components/shared/MyTable';
import { useTheme, useMediaQuery } from "@mui/material";

function VendorPage() {
    const Data = [
        {
          id: 1,
          name: "Game over",
          contactNumber: "2346345374",
          category: "electronics",
          subCategory: "MOUSE",
          totalSpending: 1234,
        },
    
        {
          id: 2,
          name: "AAT",
          contactNumber: "4424236272",
          category: "furniture",
          subCategory: "CHAIR",
          totalSpending: 127,
        },
        {
          id: 3,
          name: "Game source",
          contactNumber: "34253271824",
          category: "electronics",
          subCategory: "Wearables",
          totalSpending: 4000,
        },
      ];
      const header = [
        "ID",
        "Vendor Name",
        "Contact Number",
        "Category",
        "Sub-category",
        "Total Spending",
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
    <div className='body'>
         <div className={isMatch ? "uppersection-md" : "uppersection"}>
        <div>
          <h1>Vendors</h1>
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
        <StartIconButton title={"Add Vendor"} width={8} to={"/vendor/create"} />
  
      </div>
      <SearchField setSearchData={handleSearch} />
        <SearchField setSearchData={handleSearch} />
      <MyTables
        data={filteredData}
        tableHeaders={header}
        createData={(Data) => {
          return { ...Data };
        }}
        routes={"/vendor/detail"}
      />
    </div>
 
  )
}

export default VendorPage