import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, id, name, value }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={id} name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Checkbox;
