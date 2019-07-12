import React, { Fragment } from "react";
import styles from "./FooterRadioButton.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setActiveFilter } from "../../../actions/";

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
  value: PropTypes.string,
  onChangeActiveFilter: PropTypes.func,
  isChecked: PropTypes.bool
};

export default connect(
  (state, ownProps) => ({
    isChecked: state.activeFilter === ownProps.value
  }),
  { onChangeActiveFilter: setActiveFilter }
)(FooterRadioButton);
