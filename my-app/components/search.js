import styles from "../styles/Search.module.css";

export default function Search() {
  return (
    <section>
      <p className={styles.searchParagraph}>
        type the skill you are looking for
      </p>
      <form className={styles.form}>
        <input
          className={styles.form_input}
          type="text"
          placeholder="search here"
          name="option"
          autoComplete="off"
        />
        <input type="submit" value="Search" className={styles.form_button} />
      </form>
    </section>
  );
}
