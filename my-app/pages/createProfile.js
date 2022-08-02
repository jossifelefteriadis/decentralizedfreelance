import styles from "../styles/CreateProfile.module.css";
import { ProfileForm } from "../components/profileForm";

export default function createProfile() {
  return (
    <section className={styles.createProfileContainer}>
      <ProfileForm />
    </section>
  );
}
