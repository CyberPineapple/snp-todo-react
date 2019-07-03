import React, { Component } from "react";
import styles from "./TodosList.module.css";
import Item from "../Item/Item";

export default class TodosList extends Component {
  handleToggleAll = event => {
    this.props.toggleAllItems(event.target.checked);
  };

  getItemList = filter => {
    let list;
    const { itemsList } = this.props;
    switch (filter) {
      case "all": {
        list = itemsList;
        break;
      }
      case "completed": {
        list = itemsList.filter(value => value.completed);
        break;
      }
      case "active": {
        list = itemsList.filter(value => !value.completed);
        break;
      }
      default:
        break;
    }
    return list;
  };

  render() {
    const {
      itemsList,
      activeFilter,
      toggleItem,
      editItem,
      deleteItem
    } = this.props;
    const listCompleted = itemsList.filter(value => value.completed);
    let listView = this.getItemList(activeFilter);
    let styleButtonToggleAll = styles.list__toggle_all;
    listView = listView.map(value => (
      <Item
        data={value}
        key={value.id}
        toggleItem={toggleItem}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    ));

    return (
      <div className={styles.list}>
        <input
          type="checkbox"
          className={styleButtonToggleAll}
          checked={itemsList.length === listCompleted.length}
          onChange={this.handleToggleAll}
        />
        <ul className={styles.list}>{listView}</ul>
      </div>
    );
  }
}
