import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import styles from "../styles/CreateProfile.module.css";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    setCountry(value);
  };

  return (
    <section>
      <Select
        className={styles.countries}
        options={options}
        value={value}
        instanceId="long-value-select"
        onChange={changeHandler}
      />
    </section>
  );
}

export default CountrySelector;
