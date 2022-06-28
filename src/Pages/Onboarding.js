import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id:'',
    first_name:'',
    dob_day:'',
    dob_month:'',
    dob_year:'',
    show_gender:'',
    gender_identity:'',
    gender_intrest:'',
    email:'',
    url:'',
    about:'',
    matches:[]
  })
  const handleSubmit = () => {
    console.log("submited");
  };
  const handleChange = (e) => {
    console.log("e",e);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log('value',value,'name',name);

    setFormData ((prevState) => ({
      ...prevState,
      [name] : value
    }))
    console.log(formData);
  };

  return (
    <>
      <Nav setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className="multiple-input-container">
              
              <input
                type="radio"
                id="woman-gender-identity"
                name="gender_identity"
                value={"woman"}
                onChange={handleChange}
                checked={formData.gender_identity === 'woman'}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                type="radio"
                id="male-gender-identity"
                name="gender_identity"
                value={"male"}
                onChange={handleChange}
                checked={formData.gender_identity === 'male'}
              />
              <label htmlFor="male-gender-identity">Man</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value={"more"}
                onChange={handleChange}
                checked={formData.gender_identity === 'more'}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show_gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show_gender"
              name="show_gender"
              onChange={handleChange}
              checked={formData.show_gender}
            />
            <label>Show Me</label>
            <div className="multiple-input-container">
              
              <input
                type="radio"
                id="woman-gender-intrest"
                name="gender_intrest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_intrest === 'woman'}
              />
              <label htmlFor="woman-gender-intrest">Woman</label>
              <input
                type="radio"
                id="male-gender-intrest"
                name="gender_intrest"
                value="male"
                onChange={handleChange}
                checked={formData.gender_intrest === 'male'}
              />
              <label htmlFor="male-gender-intrest">Male</label>
              <input
                type="radio"
                id="everyone-gender-intrest"
                name="gender_intrest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_intrest === 'everyone'}
              />
              <label htmlFor="everyone-gender-intrest">everyone</label>
            </div>
            <label htmlFor="about">About Me</label>
            <input
              type="text"
              id="about"
              name="about"
              value={formData.about}
              placeholder="I like long walks..."
              onChange={handleChange}
              required={true}
            />
            <input type="submit" />
          </section>

          <section>
            <label htmlFor="about">Profile Photo</label>
            <input
              type="url"
              id="url"
              name="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              <img src={formData.url} alt="picture"/>
            </div>

          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
