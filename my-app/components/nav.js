import styles from "../styles/Nav.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function Nav() {
  const { isConnected } = useAccount();
  const [isLoggedIn, logIn] = useState(false);

  if (isConnected) {
    useEffect(() => logIn(true));
  } else {
    useEffect(() => logIn(false));
  }
  return (
    <div className={styles.navContainer}>
      <h1 className={styles.title}>df</h1>
      {isLoggedIn && (
        <ul className={styles.navItems}>
          <li>Create profile</li>
          <li>
            <ConnectButton />
          </li>
        </ul>
      )}
    </div>
  );
}
