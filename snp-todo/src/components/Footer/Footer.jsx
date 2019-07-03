import React, { Component } from "react";
import styles from "./Footer.module.css";
import FooterButton from "../FooterButton/FooterButton";

export default class Footer extends Component {
  handleButtonClearClick = () => {
    this.props.deleteCompletedItem();
  };

  render() {
    const { itemsList, activeFilter, setActiveFilter } = this.props;
    const activeItems = itemsList.filter(value => !value.completed);
    const filters = ["all", "completed", "active"];
    const buttons = filters.map((value, id) => (
      <FooterButton
        key={id}
        data={value}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    ));
    let styleButtonClearCompleted = styles.footer__delete_completed;
    if (activeItems.length !== itemsList.length) {
      styleButtonClearCompleted = styles.footer__delete_completed_view;
    }

    return (
      <div className={styles.footer}>
        <p className={styles.footer__counter}>
          items left {activeItems.length}
        </p>
        {buttons}
        <div
          className={styleButtonClearCompleted}
          onClick={this.handleButtonClearClick}
        >
          delete completed
        </div>
      </div>
    );
  }
}
