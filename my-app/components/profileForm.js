import React, { useState, useMemo } from "react";

import Select from "react-select";
import countryList from "react-select-country-list";

import { useContract, useProvider, useSigner } from "wagmi";
import styles from "../styles/CreateProfile.module.css";
import { abi, DF_CONTRACT_ADDRESS } from "../constants";
import Profile from "./addProfilePic";
import CountrySelector from "./selectCountry";
import PreviousProjects from "./previousProjects";
import Skills from "./skills";

export function ProfileForm() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  // const { isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const [country, setCountry] = useState(false);
  // const [loading, setLoading] = useState(false);

  const freelanceContract = useContract({
    addressOrName: DF_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer || provider,
  });

  const handleSubmit = async () => {
    // setCountry[country];
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const country = value.label;
    const bio = document.querySelector("#bio").value;
    try {
      console.log("fname", fname);
      console.log("lname", lname);
      console.log("country", country);
      console.log("bio", bio);
      console.log("hereeee");
      const tx = await freelanceContract.addProfile(fname, lname, country, bio);

      await tx.wait();
      console.log("You successfully created a profile!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Profile />
      <form
        className={styles.createProfileForm}
        name="create-profile-form"
        method="POST"
        action="#"
      >
        <section className={styles.createProfileName}>
          <section>
            <label className={styles.label} htmlFor="fname">
              First Name
            </label>
            <input
              className={styles.fname}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </section>
          <section>
            <label className={styles.label} htmlFor="lname">
              Last Name
            </label>
            <input
              className={styles.lname}
              type="text"
              id="lname"
              name="lname"
              required
            />
          </section>
        </section>
        <label className={styles.label} id="country" htmlFor="country">
          Country
        </label>
        {/* <select
          className={styles.gigForm__inputs}
          id="country"
          name="country"
          style={{ width: 200, height: 35 }}
          required
        >
          <option value="sweden">Sweden</option>
          <option value="greece">Greece</option>
          <option value="norway">Norway</option>
        </select> */}
        {/* <CountrySelector setCountry={setCountry} /> */}
        <Select
          options={options}
          value={value}
          instanceId="long-value-select"
          onChange={changeHandler}
        />
        <label className={styles.label} htmlFor="bio">
          Your Bio
        </label>
        <input
          className={styles.bio}
          type="text"
          id="bio"
          name="bio"
          maxLength="120"
          required
        />
        <label className={styles.label} htmlFor="lname">
          Enter your skills
        </label>
        <input
          className={styles.skills}
          type="text"
          id="skills"
          name="skills"
        />
      </form>
      <PreviousProjects />
      <Skills />
      <button className={styles.form_btn} onClick={handleSubmit}>
        Save
      </button>
      {/* <input type="submit" value="Save" className={styles.form_btn} /> */}
    </section>
  );
}
