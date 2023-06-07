import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.aboutOne}>
        <div className={styles.columnOne}>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Breed:</div>
            <div className={styles.columnContent}>Pomeranian</div>
          </div>

          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Color:</div>
            <div className={styles.columnContent}>Blue Merle White Parti</div>
          </div>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Registration:</div>
            <div className={styles.columnContent}>ACA</div>
          </div>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Mom breed:</div>
            <div className={styles.columnContent}>Pomeranian</div>
          </div>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Dad breed:</div>
            <div className={styles.columnContent}>Pomeranian</div>
          </div>
        </div>

        <div className={styles.columnTwo}>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Gender: </div>
            <div className={styles.columnContent}>Male </div>
          </div>

          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Birth Date:</div>
            <div className={styles.columnContent}>3/27/23</div>
          </div>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Current weight:</div>
            <div className={styles.columnContent}>Approx. 4 lbs</div>
          </div>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Mom weight:</div>
            <div className={styles.columnContent}>Approx. 7 lbs</div>
          </div>
          <div className={styles.headingAndContent}></div>
        </div>

        <div className={styles.columnTwo}>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Status:</div>
            <div className={styles.columnContentAvailable}>Available</div>
          </div>
        </div>

        <div className={styles.columnTwo}>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Price:</div>
            <div className={styles.columnContentPrice}>$2,995</div>
          </div>

          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>Location:</div>
            <div className={styles.columnContent}>Pembroke Pines</div>
          </div>
          <div className={styles.headingAndContent}>
            <div className={styles.columnHeading}>ID:</div>
            <div className={styles.columnContent}>01738774</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
