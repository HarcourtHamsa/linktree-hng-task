import React from "react";
import styles from "./Footer.module.css";

import zuriLogo from "../../assets/images/zuri.png";
import i4gLogo from "../../assets/images/I4G.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <img alt="zuri internship logo" src={zuriLogo} />
        <p>HNG Internship 9 Frontend Task</p>
        <img alt="ingressive 4 good logo" src={i4gLogo} />
      </div>
    </div>
  );
};

export default Footer;
