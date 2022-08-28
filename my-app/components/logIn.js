import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";

import { app } from "../firebase";

import styles from "../styles/Search.module.css";

export default function LogIn() {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.

    url: "http://localhost:3000/confirm",
    handleCodeInApp: true,
  };

  const auth = getAuth(app);
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    // const email = document
    //   .querySelector("#email")
    //   .value
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });

  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("successful logout");
    })
    .catch((error) => {
      // An error happened.
      console.log("error logout", error);
    });

  return (
    <section>
      <p>Logga in</p>
      <form className={styles.form} onSubmit="sendSignInLinkToEmail()">
        <input
          className={styles.form_input}
          type="text"
          placeholder="email"
          id="email"
          name="option"
          autoComplete="off"
        />
        <input type="submit" value="Log In" className={styles.form_button} />
      </form>
    </section>
  );
}
