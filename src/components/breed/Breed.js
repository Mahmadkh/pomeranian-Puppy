import React from "react";
import styles from "./Breed.module.css";

function Breed() {
  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <div className={styles.picture}>
          <img src="pomer.jpg" alt="" />
        </div>
        <div>
          <div className={styles.heading}>
            Learn More about Pomeranian Puppies for Sale
          </div>
          <div className={styles.content}>
            The Pomeranian is a cocky, animated companion with an extroverted
            personality. This compact little dog is an active toy breed with an
            alert character and fox-like expression. Today, the Pomeranian is a
            popular companion dog and competitive show dog. They can come in all
            colors, patterns, and variations although orange and red are the
            most popular.
          </div>
          <div className={styles.heading}>
            History of Pomeranian's Puppies for Sale
          </div>
          <div className={styles.content}>
            The breeds name originally came from the historical region of
            Pomerania (now present day Germany and Poland). Originally weighing
            nearly 30 pounds, the dog served as an able herder of sheep in its
            larger form. In 1888, Queen Victoria fell in love with a Pomeranian
            in Florence, Italy, and brought the specimen back to England,
            influencing its popularity dramatically.
          </div>
          <div className={styles.heading}>
            Pomeranian Puppies for Sale Temperment
          </div>
          <div className={styles.content}>
            Pomeranians are very intelligent dogs that love to please. Because
            of their outgoing temperaments, they can be very good family dogs
            with the right training. Due to their small size they dont require
            much exercise, but are an energetic breed that needs attention from
            their people frequently. Pomeranians need a firm hand with training.
          </div>
          <div className={styles.heading}>
            Where will the Pomeranian Dog to buy feel best?
          </div>
          <div className={styles.content}>
            Apartment is fine because of small size Very active indoors. Be
            careful in hot weather because of hair coat.
          </div>
          <div className={styles.heading}>
            Grooming an Pomeranian Dog for sale
          </div>
          <div className={styles.content}>
            Regular brushing because of long hair coat Moderate to heavy
            shedding.
          </div>
          <div className={styles.heading}>
            Exercising an Pomeranian Dog to Buy
          </div>
          <div className={styles.content}>Daily light exercise.</div>
        </div>
      </div>
    </div>
  );
}

export default Breed;
