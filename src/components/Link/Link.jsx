import React from "react";
import styles from "./Link.module.css";

const Link = ({ href, id, label }) => {
  return (
    <a href={href} id={id} className={styles.link}>
      {label}
    </a>
  );
};

export default Link;
