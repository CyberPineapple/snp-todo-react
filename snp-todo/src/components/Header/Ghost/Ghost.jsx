import React from "react";
import styles from "./Ghost.module.css";
import PropTypes from "prop-types";

const Ghost = ({ color }) => {
  let ghostColor;
  switch (color) {
    case "red": {
      ghostColor = styles.red;
      break;
    }
    case "orange": {
      ghostColor = styles.orange;
      break;
    }
    case "blue": {
      ghostColor = styles.blue;
      break;
    }
    default: {
      ghostColor = styles.red;
    }
  }

  return (
    <div className={styles.ghost}>
      <div className={styles.item1 + " " + ghostColor}>
        <div className={styles.eyes} />
        <div className={styles.eyes} />
      </div>
      <div className={styles.item2 + " " + ghostColor} />
      <div className={styles.item3 + " " + ghostColor} />
      <div className={styles.item4 + " " + ghostColor} />
    </div>
  );
};

Ghost.propTypes = {
  color: PropTypes.oneOf(["red", "orange", "blue"])
};
export default Ghost;
