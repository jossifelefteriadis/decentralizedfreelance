import styles from "../styles/CreateProfile.module.css";
import Nav from "../components/nav";
import { ProfileForm } from "../components/profileForm";

export default function createProfile() {
  return (
    <section>
      <Nav />
      <section className={styles.createProfileContainer}>
        <ProfileForm />
      </section>
    </section>
  );
}
