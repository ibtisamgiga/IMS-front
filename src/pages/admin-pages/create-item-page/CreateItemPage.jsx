import { useState } from "react";
import FormHeader from "../../../components/shared/form-header/FormHeader";
import { Divider } from "@mui/material";
import FormInput from "../../../components/shared/form-input/FormInput";
import FormSelect from "../../../components/shared/form-select/FormSelect";

function CreateItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    serialNumber: "",
    description: "",
    VendorId: null,
    price: "",
    categoryId: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="body">
      <FormHeader heading={""} form={"createItem"} />
      <form onSubmit={handleSubmit} id={"createItem"}>
        <FormInput
          sideLabel={"Item Name"}
          placeHolder={"Item Name"}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Serial Number"}
          placeHolder={"Serial Number"}
          onChange={(e) => {
            setFormData({ ...formData, serialNumber: e.target.value });
          }}
          value={formData.serialNumber}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Description"}
          placeHolder={"Enter Description Here..."}
          multiLine={true}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
          value={formData.description}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormSelect
          sideLabel={"Select Category "}
          placeHolder={"select Category"}
          items={[{ name: "electronics", id: 2 }]}
          keyId={1}
          onChange={(e) => {
            setFormData({ ...formData, categoryId: e.target.value });
          }}
        />
        <FormSelect
          sideLabel={"Select Sub-Category "}
          placeHolder={"select Sub-Category"}
          items={[{ name: "mouse", id: 1 }]}
          keyId={1}
          onChange={(e) => {
            setFormData({ ...formData, categoryId: e.target.value });
          }}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"price"}
          placeHolder={"price"}
          onChange={(e) => {
            setFormData({ ...formData, price: e.target.value });
          }}
          value={formData.price}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormSelect
          sideLabel={"Select Vendor  "}
          placeHolder={"select Vendor"}
          items={[{ name: "game-over", id: 1 }]}
          keyId={1}
          onChange={(e) => {
            setFormData({ ...formData, VendorId: e.target.value });
          }}
        />
      </form>
    </div>
  );
}

export default CreateItemPage;
