import { useState } from "react";
import FormHeader from "../../../components/shared/form-header/FormHeader";
import { Divider } from "@mui/material";
import FormInput from "../../../components/shared/form-input/FormInput";
import FormSelect from "../../../components/shared/form-select/FormSelect";

function CreateDepartmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="body">
      <FormHeader heading={"Add Department"} form={"createDepartment"} />
      <form onSubmit={handleSubmit} id={"createDepartment"}>
        <FormInput
          sideLabel={"Name"}
          placeHolder={"Name"}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Number"}
          placeHolder={"Number"}
          onChange={(e) => {
            setFormData({ ...formData, number: e.target.value });
          }}
          value={formData.number}
        />

        <Divider sx={{ borderBottomWidth: 2, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Email"}
          placeHolder={"Email"}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
        />
      </form>
    </div>
  );
}

export default CreateDepartmentPage;
