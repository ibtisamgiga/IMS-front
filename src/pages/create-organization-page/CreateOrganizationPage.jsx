import * as React from "react";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { defaultImage, AvatarInput } from "../../constants/organizationConst";
import FormHeader from "../../components/shared/form-header/FormHeader";
import FormImageHolder from "../../components/shared/form-image/FormImageHolder";
import FormInput from "../../components/shared/form-input/FormInput";
import { Countries, States, Cities } from "countries-states-cities-service";
import FormSelect from "../../components/shared/form-select/FormSelect";
function CreateOrganizationPage() {
  const [url, setUrl] = useState(defaultImage);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repName: "",
    repContactNo: "",
    repName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    bio: "",
  });
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});
  const handleFiles = (files) => {
    // console.log(files.base64,'hello');
    setUrl(files.base64);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    //console.log(currentCountry);
    setCountries(Countries.getCountries());
  }, []);

  return (
    <div className="body">
      <FormHeader
        heading={"Add New Organization"}
        form={"createOrganization"}
      />
      <form onSubmit={handleSubmit} id={"createOrganization"}>
        <FormImageHolder
          handleFiles={handleFiles}
          image={url}
          label={"Organization Logo"}
          subLabel={"upload a logo with minimum resoulation of 800*800px"}
        />
        <FormInput
          sideLabel={"Name of Organization"}
          placeHolder={"Name of Organization"}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Email"}
          placeHolder={"Email"}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Bio"}
          placeHolder={"Short Bio here..."}
          multiLine={true}
          onChange={(e) => {
            setFormData({ ...formData, bio: e.target.value });
          }}
          value={formData.bio}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Address"}
          placeHolder={"Address"}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
          value={formData.address}
        />

        <FormSelect
          sideLabel={"  "}
          placeHolder={"select Country"}
          items={countries}
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
            //console.log(formData.country);

            const c = Countries.getCountries({
              filters: { name: e.target.value },
            })[0];
            //console.log(c.iso2.toString())
            setCities(
              Cities.getCities({ filters: { country_code: c.iso2.toString() } })
            );
            //console.log(c,"current country")
          }}
        />

        <FormSelect
          sideLabel={"  "}
          placeHolder={"select City"}
          items={cities}
          onChange={(e) => {
            setFormData({ ...formData, city: e.target.value });
          }}
        />
        <FormInput
          sideLabel={"  "}
          placeHolder={"Zip Code"}
          onChange={(e) => {
            setFormData({ ...formData, zip: e.target.value });
          }}
          value={formData.zip}
        />
        <Divider sx={{ borderBottomWidth: 4, marginTop: "20px" }} />
        <FormInput
          sideLabel={"Representative Name"}
          placeHolder={"Representative Name"}
        />
        <FormInput
          sideLabel={"Representative Contact No."}
          placeHolder={"Representative Contact No."}
        />
      </form>
    </div>
  );
}

export default CreateOrganizationPage;
