import styles from "../styles/FileInput.module.css";
import { useState } from "react";
import Image from "next/image";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddProfilePic() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <section className={styles.submitImageContainer}>
      <section className={styles.submitImage}>
        <label>
          Add Image
          <input type="file" onChange={handleImageChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </section>
      <Image src={url} width="100px" height="100px" layout="fixed" />
    </section>
  );
}
