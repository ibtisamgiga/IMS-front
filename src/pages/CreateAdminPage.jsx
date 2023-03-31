import * as React from "react";
import { useState } from "react";
import { defaultImage, AvatarInput } from "../constants/organizationConst";
import FormHeader from "../components/shared/form-header/FormHeader";
import FormImageHolder from "../components/shared/form-image/FormImageHolder";
import Divider from "@mui/material/Divider";
import FormInput from "../components/shared/form-input/FormInput";
import FormSelect from "../components/shared/form-select/FormSelect";
function CreateAdminPage() {
  const [url, setUrl] = useState(defaultImage);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    privateEmail: "",
    contactNo: "",
    organizationId: null,
    rolesId: null,
  });
  const handleFiles = (files) => {
    // console.log(files.base64,'hello');
    setUrl(files.base64);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="body">
      <FormHeader heading={"Add New Admin"} form={"createAdmin"} />
      <form onSubmit={handleSubmit} id={"createAdmin"}>
        <FormImageHolder
          handleFiles={handleFiles}
          image={url}
          label={"Admin's Picture"}
          subLabel={"upload high resoulation with clear face"}
        />
        <FormInput
          sideLabel={"Name"}
          placeHolder={"Full Name"}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Email Address"}
          placeHolder={"Email Address"}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        {/* <FormInput sideLabel={"Organization"} placeHolder={"Organization"} /> */}
        <FormSelect
          sideLabel={"Organization"}
          placeHolder={"Organization"}
          items={[
            { name: "gigalabs", id: 1 },
            { name: "tanbits", id: 2 },
            { name: "I2C", id: 3 },
          ]}
          onChange={(e) => {
            setFormData({ ...formData, organizationId: e.target.value });
            console.log(formData.organizationId);
          }}
        />

        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Contact Number"}
          placeHolder={"Contact Number"}
          onChange={(e) => {
            setFormData({ ...formData, contactNo: e.target.value });
          }}
          value={formData.contactNo}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
      </form>
    </div>
  );
}

export default CreateAdminPage;
