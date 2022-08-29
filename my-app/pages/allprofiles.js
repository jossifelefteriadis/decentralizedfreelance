// import styles from "../styles/CreateProfile.module.css";
import Nav from "../components/nav";
import GetAllProfiles from "../components/getAllProfiles";

export default function getProfiles() {
  return (
    <section>
      <Nav />
      <section>
        <GetAllProfiles />
      </section>
    </section>
  );
}
