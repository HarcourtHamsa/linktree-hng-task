import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isTicked, setIsTicked] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "first_name":
        setFirstName(e.target.value);
        break;
      case "last_name":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      case "check":
        setIsTicked(!isTicked);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Contact Me</h1>
          <p className=" text-gray">
            Hi there, contact me to ask me about anything you have in mind.
          </p>

          <form>
            <div className={styles.form_flex + " " + styles.form_group}>
              <Input
                id={"first_name"}
                label="First name"
                name={"first_name"}
                placeholder="Enter your first name"
                onChange={handleChange}
                value={firstName}
                type={"text"}
              />
              <Input
                id={"last_name"}
                label="Last name"
                name={"last_name"}
                placeholder="Enter your last name"
                onChange={handleChange}
                value={lastName}
                type={"text"}
              />
            </div>

            <div className={styles.form_group}>
              <Input
                id={"email"}
                label="Email"
                name={"email"}
                placeholder="yourname@email.com"
                onChange={handleChange}
                value={email}
                type={"email"}
              />
            </div>
            <div className={styles.form_group}>
              <TextArea
                id={"message"}
                label="Message"
                name={"message"}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                onChange={handleChange}
                value={message}
              />
            </div>
            <div className={styles.form_group}>
              <Checkbox
                label="You agree to providing your data to Hamsa who may contact you."
                id={"check"}
                name={"check"}
                value={isTicked}
              />
            </div>

            <Button
              label={"Send message"}
              theme="primary"
              type={"submit"}
              id="btn__submit"
            />
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
