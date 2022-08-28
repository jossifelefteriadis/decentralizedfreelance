import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function Nav() {
  const { isConnected } = useAccount();
  const [isLoggedIn, logIn] = useState(false);

  useEffect(() => {
    if (isConnected) {
      logIn(true);
    } else {
      logIn(false);
    }
  }, [isConnected]);

  return (
    <div className={styles.navContainer}>
      <h1 className={styles.title}>df</h1>
      {isLoggedIn && (
        <ul className={styles.navItems}>
          <Link href="/createProfile">
            <li>Create profile</li>
          </Link>
          <li>
            <ConnectButton />
          </li>
        </ul>
      )}
    </div>
  );
}
