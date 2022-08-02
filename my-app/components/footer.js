import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContainer}>
        {/* <section>
          <p className={styles.footerContainer_titles}>Categories</p>
          <p className={styles.footerContainer_text}>Smart Contract</p>
          <p className={styles.footerContainer_text}>Frontend</p>
          <p className={styles.footerContainer_text}>Backend</p>
        </section> */}
        <section>
          <p className={styles.footerContainer_titles}>Company</p>
          <p className={styles.footerContainer_text}>About</p>
          <p className={styles.footerContainer_text}>Privacy Policy</p>
          <p className={styles.footerContainer_text}>Terms of Service</p>
          <p className={styles.footerContainer_text}>Work With Us</p>
        </section>
        <section>
          <p className={styles.footerContainer_titles}>Support</p>
          <p className={styles.footerContainer_text}>Help &amp; Support</p>
          <p className={styles.footerContainer_text}>Selling on dLance</p>
          <p className={styles.footerContainer_text}>Buying on dLance</p>
        </section>
        <section>
          <p className={styles.footerContainer_titles}>Community</p>
          <p className={styles.footerContainer_text}>Discord</p>
          <p className={styles.footerContainer_text}>Twitter</p>
        </section>
      </section>
    </footer>
  );
}
