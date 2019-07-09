import React, { Fragment } from "react";
import styles from "./FooterRadioButton.module.css";
import PropType from "prop-types";

const FooterRadioButton = ({ value, onChangeActiveFilter, isChecked }) => {
  return (
    <Fragment>
      <input
        type="radio"
        id={value}
        value={value}
        onChange={onChangeActiveFilter}
        checked={isChecked}
        className={styles.radio}
      />
      <label htmlFor={value} className={styles.button}>
        {value}
      </label>
    </Fragment>
  );
};

FooterRadioButton.propTypes = {
  value: PropType.string,
  onChangeActiveFilter: PropType.func,
  isChecked: PropType.bool
};

export default FooterRadioButton;
