import React, { Component, Fragment } from "react";
import styles from "./FooterButton.module.css";

export default class FooterButton extends Component {
  render() {
    const { activeFilter, data, setActiveFilter } = this.props;
    return (
      <Fragment>
        <input
          type="radio"
          id={data}
          value={data}
          onChange={setActiveFilter}
          checked={activeFilter === data}
        />
        <label htmlFor={data} className={styles.footer__button}>
          {data}
        </label>
      </Fragment>
    );
  }
}
