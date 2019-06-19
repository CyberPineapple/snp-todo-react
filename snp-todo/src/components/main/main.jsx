import React from "react";
import styles from "./main.module.css";
import Item from "../item/item";

export default class Main extends React.Component {
  render() {
    let list = "";
    let listCompleted = this.props.list.filter(value => value.completed);
    let styleButtonToggleAll = styles.main__toggle_all;

    if (this.props.list.length > 0) {
      styleButtonToggleAll += " " + styles.main__toggle_all_view;
      if (this.props.showItems === "all") {
        list = this.props.list.map(value => (
          <Item
            data={value}
            key={value.id}
            toggleItem={this.props.toggleItem}
            deleteItem={this.props.deleteItem}
            editItem={this.props.editItem}
          />
        ));
      } else if (this.props.showItems === "completed") {
        list = this.props.list.map(value => {
          if (value.completed) {
            return (
              <Item
                data={value}
                key={value.id}
                toggleItem={this.props.toggleItem}
                deleteItem={this.props.deleteItem}
                editItem={this.props.editItem}
              />
            );
          }
        });
      } else {
        list = this.props.list.map(value => {
          if (!value.completed) {
            return (
              <Item
                data={value}
                key={value.id}
                toggleItem={this.props.toggleItem}
                deleteItem={this.props.deleteItem}
                editItem={this.props.editItem}
              />
            );
          }
        });
      }
    }

    return (
      <div className={styles.main}>
        <input type="checkbox" className={styleButtonToggleAll} checked={this.props.list.length === listCompleted.length} onChange={(e) => this.handleToggleAllOnChange(e)} />
        <ul className={styles.list}>{list}</ul>
      </div>
    );
  }

  handleToggleAllOnChange = (e) => {
    this.props.toggleAllItems(e.target.checked);
  }
}
