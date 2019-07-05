import React, { Fragment } from "react";
import styles from "./FooterRadioButton.module.css";

const FooterRadioButton = props => {
  const { value, onChangeActiveFilter, isChecked } = props;
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
      <label htmlFor={value} className={styles.radio__button}>
        {value}
      </label>
    </Fragment>
  );
}

export default FooterRadioButton;