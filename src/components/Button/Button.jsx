import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ label, type, theme, id }) => {
  return (
    <button id={id} type={type} data-theme={theme} className={styles.btn}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.string,
};

export default Button;
