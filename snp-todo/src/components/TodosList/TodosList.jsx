import React, { Component } from "react";
import styles from "./TodosList.module.css";
import Item from "../Item/Item";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleAllItems } from "../../actions/";

class TodosList extends Component {
  handleToggleAll = event => {
    this.props.toggleAllItems(event.target.checked);
  };

  getItemList = () => {
    const { itemsList, activeFilter } = this.props;
    switch (activeFilter) {
      case "all": {
        return itemsList;
      }
      case "completed": {
        return itemsList.filter(value => value.completed);
      }
      case "active": {
        return itemsList.filter(value => !value.completed);
      }
      default:
        return itemsList;
    }
  };

  render() {
    const { itemsList, isVisibleComponent } = this.props;
    const listCompleted = itemsList.filter(value => value.completed);
    const itemsToShow = this.getItemList();
    if (isVisibleComponent) {
      return null;
    }

    return (
      <div className={styles.list}>
        <input
          type="checkbox"
          className={styles.buttonToggleAll}
          checked={itemsList.length === listCompleted.length}
          onChange={this.handleToggleAll}
        />
        <ul>
          {itemsToShow.map(value => (
            <Item value={value} key={value.id} />
          ))}
        </ul>
      </div>
    );
  }
}

TodosList.propTypes = {
  isVisibleComponent: PropTypes.bool,
  itemsList: PropTypes.array,
  toggleItem: PropTypes.func,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func
};

export default connect(
  state => ({
    itemsList: state.itemsList,
    activeFilter: state.activeFilter,
    isVisibleComponent: !state.itemsList.length
  }),
  { toggleAllItems }
)(TodosList);
