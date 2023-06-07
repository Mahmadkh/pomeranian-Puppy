import React, { useState } from "react";
import Breed from "../breed/Breed";
import About from "../about/About";
import styles from "./Buttons.module.css";

function Buttons() {
  const [showAbout, setShowAbout] = useState(true);
  const [showBreed, setShowBreed] = useState(false);
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isBreedClicked, setIsBreedClicked] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowBreed(false);
    setIsAboutClicked(true);
    setIsBreedClicked(false);
  };

  const handleBreedClick = () => {
    setShowAbout(false);
    setShowBreed(true);
    setIsAboutClicked(false);
    setIsBreedClicked(true);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttons}>
        <button
          onClick={handleAboutClick}
          className={
            isAboutClicked
              ? `${styles.aboutAndBreedButton} ${styles.clicked}`
              : styles.aboutAndBreedButton
          }
        >
          <p>About Puppy</p>
        </button>
        <button
          onClick={handleBreedClick}
          className={
            isBreedClicked
              ? `${styles.aboutAndBreedButton} ${styles.clicked}`
              : styles.aboutAndBreedButton
          }
        >
          <p>About Breed</p>
        </button>
      </div>
      <div className={styles.ButtonContainer}>
        {showAbout && <About />}
        {showBreed && <Breed />}
      </div>
    </div>
  );
}

export default Buttons;
