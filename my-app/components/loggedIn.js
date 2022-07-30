import styles from "../styles/LoggedIn.module.css";

export default function LoggedIn() {
  return (
    <section className={styles.loggedInMain}>
      <section className={styles.loggedInAccount}>
        <h2>Creator</h2>
        <p className={styles.loggedInAccount__type}>
          ( if you are a creator, follow these steps )
        </p>
        <section>
          <p>
            - Make sure you are signed in with the correct wallet - it's where
            the fund go
          </p>
          <p>- Take your time and create a compelling profile</p>
          <p>- Don't forget to add previous work</p>
          <p>
            - Make sure you always have 0.04 ether in your wallet - otherwise
            your account is inactive
          </p>
          <p>
            - Not answering a first request within 24 hours will cost you 0.02
            ether - after two failing attempts, your account will be deactivated
            for one week
          </p>
        </section>
      </section>
      <section className={styles.loggedInAccount}>
        <h2>Client</h2>
        <p className={styles.loggedInAccount__type}>
          ( looking for a creator, follow these steps )
        </p>
        <p>
          - Make sure you've done as much research as possible on what you need
          help with
        </p>
        <p>
          - Type down a description of the job you need help with - be as
          detailed as possible
        </p>
        <p>
          - Type down a description of the job you need help with - be as
          detailed as possible
        </p>
        <p>
          - Add some fund to your wallet - it costs 0.02 ether to start a
          conversation with a potential creator
        </p>
        <p>
          - Take your time on finding a creator as it will cost you to start
          interacting with them
        </p>
      </section>
    </section>
  );
}
