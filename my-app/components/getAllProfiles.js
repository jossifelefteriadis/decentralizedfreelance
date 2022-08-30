import styles from "../styles/getAllProfiles.module.css";
import Nav from "../components/nav";

import { useContract, useProvider, useSigner } from "wagmi";
import { abi, DF_CONTRACT_ADDRESS } from "../constants";
import { useEffect, useState } from "react";

export default function GetAllProfiles() {
  const [allProfiles, setAllProfiles] = useState([]);
  const provider = useProvider();
  const { data: signer } = useSigner();
  const freelanceContract = useContract({
    addressOrName: DF_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer || provider,
  });

  useEffect(() => {
    try {
      (async () => {
        const tx = await freelanceContract.getAllProfiles();

        setAllProfiles(tx);
        // await tx.wait();
        console.log("You successfully fetched all profiles!");
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className={styles.getAllProfilesContainer}>
      <h2>ALL FREELANCERS</h2>
      <section className={styles.allProfiles}>
        {allProfiles.map((profile) => (
          <section
            className={styles.profile}
            key={allProfiles.indexOf(profile)}
          >
            <p>
              <span>Name:</span> {profile.fName} {profile.lName}
            </p>
            <p>
              <span>From:</span> {profile.country}
            </p>
            <p>
              <span>Bio:</span> {profile.bio}
            </p>
          </section>
        ))}
      </section>
    </section>
  );
}
