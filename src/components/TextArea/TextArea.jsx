import React from "react";
import PropTypes from "prop-types";
import styles from "./TextArea.module.css";

const TextArea = ({ label, placeholder, value, onChange, id, name }) => {
  return (
    <div className={styles.input_container}>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default TextArea;
