import styles from "../styles/FileInput.module.css";
import { useState } from "react";
import Image from "next/image";
// import { storage } from "../firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddProfilePic() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  let theimg;
  let imageUrl;

  const handleSubmit = () => {
    // const imageRef = ref(storage, "image");
    // uploadBytes(imageRef, image)
    //   .then(() => {
    //     getDownloadURL(imageRef)
    //       .then((url) => {
    //         setUrl(url);
    //       })
    //       .catch((error) => {
    //         console.log(error.message, "error getting the image url");
    //       });
    //     setImage("");
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    let reader = new FileReader();
    let byteArr;
    reader.readAsDataURL(image);
    // reader.onload = () => {
    //   console.log("reader.result här", reader.result);
    //   let binary_string = window.atob(reader.result);
    //   let len = binary_string.length;
    //   let bytes = new Uint8Array(len);
    //   for (let i = 0; i < len; i++) {
    //     bytes[i] = binary_string.charCodeAt(i);
    //   }
    //   console.log("bytes uint8 array", bytes.buffer);
    // };
    reader.onloadend = () => {
      console.log("RESULT", reader.result);
      const utf8Encode = new TextEncoder();
      byteArr = utf8Encode.encode(reader.result);
      console.log("BYTES", byteArr);
      let blob = URL.createObjectURL(
        new Blob([byteArr], { type: "image/png" })
      );
      let urlCreator = window.URL || window.webkitURL;
      imageUrl = urlCreator.createObjectURL(blob);
      console.log("BYTES to img", imageUrl);

      let binary = "";
      let bytes = new Uint8Array(byteArr);
      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      console.log("från bytes till base64", window.btoa(binary));
      return window.btoa(binary);
    };
  };

  return (
    <section className={styles.submitImageContainer}>
      <section className={styles.submitImage}>
        <label>
          Add Image
          <input type="file" onChange={handleImageChange} />
        </label>
        {/* TODO: add handlSubmit function */}
        <button onClick={handleSubmit}>Submit</button>
      </section>
      <Image
        src={theimg === "" ? "" : imageUrl}
        width="100px"
        height="100px"
        layout="fixed"
      />
      {/* <Image src={imga} width="100px" height="100px" layout="fixed" /> */}
      <p>hej</p>
      <img id="itemPreview" src="" />
    </section>
  );
}
