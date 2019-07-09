import React from "react";
import styles from "./Pacman.module.css";

const Pacman = () => {
  return (
    <div className={styles.pacman}>
      <div className={styles.item1} />
      <div className={styles.item2} />
    </div>
  );
};

export default Pacman;
