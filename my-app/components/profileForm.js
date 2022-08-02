import styles from "../styles/CreateProfile.module.css";
import CountrySelector from "./selectCountry";
import PreviousProjects from "./previousProjects";
import Skills from "./skills";

export function ProfileForm() {
  return (
    <section>
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
        <label className={styles.label} htmlFor="country">
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
        <CountrySelector />
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
      <input type="submit" value="Save" className={styles.form_btn} />
    </section>
  );
}
