import React, { useState } from "react";
import styles from "./Form.module.css";



  

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log("Form submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Agree Terms:", agreeTerms);

    // Reset form fields
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setAgreeTerms(false);
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBody}>
        <div className={styles.contactUs}>Call us for any questions !</div>
        <div className={styles.number}>(754) 238-2359</div>
        <div className={styles.borderLine}></div>

        <div className={styles.formRows}>
          <form onSubmit={handleSubmit}>
            <div className={styles.name}>
              <label htmlFor="firstName"></label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                              required
                              placeholder="First Name"
                             


              />
            </div>

            <div className={styles.name}>
              <label htmlFor="lastName"></label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                              required
                              placeholder="Last Name"

              />
            </div>

            <div className={styles.name}>
              <label htmlFor="phone"></label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                              required
                              placeholder="Phone"
              />
            </div>

            <div className={styles.email}>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                              required
                              placeholder="Email"
              />
            </div>

            <div className={styles.massage}>
              <label htmlFor="message"></label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                              required
                              placeholder="Massage"
              ></textarea>
            </div>

            <div className={styles.checkBox}>
              <div>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleAgreeTermsChange}
                  required
                />
              </div>
              <div className={styles.iPreferText}>
                <label htmlFor="agreeTerms">I prefer texting </label>
              </div>
            </div>
            <div className={styles.agreeTo}>I agree to receive email update about puppies</div>

            <button type="submit"> Contact me!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
