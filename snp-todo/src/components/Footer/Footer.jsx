import React, { PureComponent } from "react";
import styles from "./Footer.module.css";
import FooterRadioButton from "./FooterRadioButton/";
import filters from "../../constants/filters";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCompletedItems } from "../../actions/";

class Footer extends PureComponent {
  render() {
    const {
      isVisibleComponent,
      isVisibleDeleteButton,
      activeItemsCount,
      deleteCompletedItems
    } = this.props;

    if (isVisibleComponent) {
      return null;
    }

    return (
      <div className={styles.block}>
        <p className={styles.counter}>items left {activeItemsCount}</p>
        {filters.map(value => (
          <FooterRadioButton key={value} value={value} />
        ))}
        {isVisibleDeleteButton && (
          <button
            className={styles.deleteButton}
            onClick={deleteCompletedItems}
          >
            delete completed
          </button>
        )}
      </div>
    );
  }
}

Footer.propTypes = {
  isVisibleComponent: PropTypes.bool,
  deleteCompletedItems: PropTypes.func,
  isVisibleDeleteButton: PropTypes.bool,
  activeItemsCount: PropTypes.number
};

export default connect(
  state => {
    const { itemsList } = state;
    const activeItems = itemsList.filter(value => !value.completed);
    return {
      isVisibleComponent: !itemsList.length,
      activeItemsCount: activeItems.length,
      isVisibleDeleteButton: activeItems.length !== itemsList.length
    };
  },
  { deleteCompletedItems }
)(Footer);
