import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>What comes included FREE with each of our puppies</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
                  <tr>
                      <td>
                      Health Warranty
                      </td>
            <td>
                          
                          
              <img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Health Certificate 
                      </td>
                      <td>
                          
                          
                          <img src="greencheck.svg" alt="" />
                        </td>
          </tr>
          <tr>
            <td>
              Top Breeders 
                      </td>
                      <td>
                          
                          
                          <img src="greencheck.svg" alt="" />
                        </td>
          </tr>
          <tr>
            <td>
              No Puppy Mill Promise </td>
                      <td><img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Exclusive Training Package </td>
                      <td><img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Transparent Online Pricing </td>
                      <td><img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Up to 100% Financing</td>
                      <td> <img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Microchipped</td>
                      <td> <img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Veterinary Perks & Discounts </td>
                      <td><img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Puppy Care Instructions and Guidance</td>
                      <td>
              <img src="greencheck.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              Meet and Play with our Puppies in Our Spacious Play Pens before
              deciding to make a commitment </td>
                      <td><img src="greencheck.svg" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Features;
