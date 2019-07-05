import React, { Component } from "react";
import styles from "./Footer.module.css";
import FooterRadioButton from "./FooterRadioButton/FooterRadioButton";
import filters from "../../constants/filters";

export default class Footer extends Component {
  handleButtonClearClick = () => {
    this.props.deleteCompletedItem();
  };

  render() {
    const {
      activeFilter,
      setActiveFilter,
      isVisibleDeleteButton,
      countActiveItems
    } = this.props;
    const radioButtons = filters.map(value => (
      <FooterRadioButton
        key={value}
        value={value}
        isChecked={activeFilter === value}
        onChangeActiveFilter={setActiveFilter}
      />
    ));
    const deleteCompletedButton = isVisibleDeleteButton ? (
      <div
        className={styles.footer__delete_completed}
        onClick={this.handleButtonClearClick}
      >
        delete completed
      </div>
    ) : null;

    return (
      <div className={styles.footer}>
        <p className={styles.footer__counter}>
          items left {countActiveItems}
        </p>
        {radioButtons}
        {deleteCompletedButton}
      </div>
    );
  }
}
