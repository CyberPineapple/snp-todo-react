import React, { Component } from "react";
import styles from "./Footer.module.css";
import FooterRadioButton from "./FooterRadioButton/";
import filters from "../../constants/filters";
import PropType from "prop-types";

export default class Footer extends Component {
  handleButtonClearClick = () => {
    this.props.deleteCompletedItem();
  };

  render() {
    const {
      activeFilter,
      setActiveFilter,
      isVisibleDeleteButton,
      activeItemsCount
    } = this.props;

    return (
      <div className={styles.block}>
        <p className={styles.counter}>items left {activeItemsCount}</p>
        {filters.map(value => (
          <FooterRadioButton
            key={value}
            value={value}
            isChecked={activeFilter === value}
            onChangeActiveFilter={setActiveFilter}
          />
        ))}
        {isVisibleDeleteButton && (
          <button
            className={styles.deleteButton}
            onClick={this.handleButtonClearClick}
          >
            delete completed
          </button>
        )}
      </div>
    );
  }
}

Footer.propTypes = {
  activeFilter: PropType.string,
  setActiveFilter: PropType.func,
  isVisibleDeleteButton: PropType.bool,
  activeItemsCount: PropType.number
};
