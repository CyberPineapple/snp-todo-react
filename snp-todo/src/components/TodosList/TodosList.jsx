import React, { Component } from "react";
import styles from "./TodosList.module.css";
import Item from "../Item/Item";
import PropType from "prop-types";

export default class TodosList extends Component {
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
    const { itemsList, toggleItem, editItem, deleteItem } = this.props;
    const listCompleted = itemsList.filter(value => value.completed);
    const itemsToShow = this.getItemList();

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
            <Item
              value={value}
              key={value.id}
              toggleItem={toggleItem}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodosList.propTypes = {
  itemsList: PropType.array,
  toggleItem: PropType.func,
  editItem: PropType.func,
  deleteItem: PropType.func
};
