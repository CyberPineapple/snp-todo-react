import React from "react";
import styles from "./Main.module.css";
import Item from "../Item/Item";

export default class Main extends React.Component {
  handleToggleAllChange = e => {
    this.props.toggleAllItems(e.target.checked);
  };

  render() {
    const { itemsList, activeFilter, toggleItem, editItem, deleteItem } = this.props;
    const listCompleted = itemsList.filter(value => value.completed);
    let list;
    let styleButtonToggleAll = styles.main__toggle_all;

    if (!!itemsList.length) {
      styleButtonToggleAll = styles.main__toggle_all_view;
      if (activeFilter === "all") {
        list = itemsList.map(value => (
          <Item
            data={value}
            key={value.id}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ));
      } else if (activeFilter === "completed") {
        list = itemsList.map(value => {
          if (value.completed) {
            return (
              <Item
                data={value}
                key={value.id}
                toggleItem={toggleItem}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            );
          } else {
            return null;
          }
        });
      } else {
        list = itemsList.map(value => {
          if (!value.completed) {
            return (
              <Item
                data={value}
                key={value.id}
                toggleItem={toggleItem}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            );
          } else {
            return null;
          }
        });
      }
    }

    return (
      <div className={styles.main}>
        <input
          type="checkbox"
          className={styleButtonToggleAll}
          checked={itemsList.length === listCompleted.length}
          onChange={e => this.handleToggleAllChange(e)}
        />
        <ul className={styles.list}>{list}</ul>
      </div>
    );
  }
}
