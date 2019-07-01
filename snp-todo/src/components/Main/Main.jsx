import React from "react";
import styles from "./Main.module.css";
import Item from "../Item/Item";

export default class Main extends React.Component {
  handleToggleAllChange = event => {
    this.props.toggleAllItems(event.target.checked);
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
    let listView;
    let styleButtonToggleAll = styles.main__toggle_all;
    switch (activeFilter) {
      case "all": {
        listView = itemsList;
        break;
      }
      case "completed": {
        listView = listCompleted;
        break;
      }
      case "active": {
        listView = itemsList.filter(value => !value.completed);
        break;
      }
      default:
        break;
    }

    if (itemsList.length) {
      styleButtonToggleAll = styles.main__toggle_all_view;
      listView = listView.map(value => (
        <Item
          data={value}
          key={value.id}
          toggleItem={toggleItem}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ));
    }

    return (
      <div className={styles.main}>
        <input
          type="checkbox"
          className={styleButtonToggleAll}
          checked={itemsList.length === listCompleted.length}
          onChange={this.handleToggleAllChange}
        />
        <ul className={styles.list}>{listView}</ul>
      </div>
    );
  }
}
