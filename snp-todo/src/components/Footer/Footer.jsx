import React, { PureComponent } from "react";
import styles from "./Footer.module.css";
import FooterRadioButton from "./FooterRadioButton/";
import filters from "../../constants/filters";
import PropTypes from "prop-types";

export default class Footer extends PureComponent {
  render() {
    const {
      activeFilter,
      setActiveFilter,
      isVisibleDeleteButton,
      activeItemsCount,
      deleteCompletedItem
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
          <button className={styles.deleteButton} onClick={deleteCompletedItem}>
            delete completed
          </button>
        )}
      </div>
    );
  }
}

Footer.propTypes = {
  activeFilter: PropTypes.string,
  setActiveFilter: PropTypes.func,
  isVisibleDeleteButton: PropTypes.bool,
  activeItemsCount: PropTypes.number
};
