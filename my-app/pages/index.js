import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

import Nav from "../components/nav";
import Footer from "../components/footer";
import About from "../components/about";
import LoggedIn from "../components/loggedIn";

export default function Home() {
  const { isConnected } = useAccount();
  const [isLoggedIn, logIn] = useState(false);

  if (!isConnected) {
    useEffect(() => logIn(true));
  } else {
    useEffect(() => logIn(false));
  }
  return (
    <section className={styles.container}>
      <Head>
        <title>Decentralized Freelance</title>
        <meta
          name="description"
          content="A decentralized application for freelancers to create profiles and get more gigs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      {isLoggedIn ? (
        <main className={styles.main}>
          <h1 className={styles.title} style={{ marginBottom: "4rem" }}>
            Welcome to <span>decentralized freelance</span>
          </h1>

          <ConnectButton />
        </main>
      ) : (
        <LoggedIn />
      )}
      <About />
      <Footer />
    </section>
  );
}
