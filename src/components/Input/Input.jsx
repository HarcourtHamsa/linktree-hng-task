import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ label, placeholder, value, onChange, id, name, type }) => {
  return (
    <div className={styles.input_container}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
