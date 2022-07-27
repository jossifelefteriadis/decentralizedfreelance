import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Nav from "../components/nav";

export default function Home() {
  return (
    <nav className={styles.container}>
      <Head>
        <title>Decentralized Freelance</title>
        <meta
          name="description"
          content="A decentralized application for freelancers to create profiles and get more gigs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "4rem" }}>
          Welcome to <span>decentralized freelance</span>
        </h1>

        <ConnectButton />
      </main>
    </nav>
  );
}
