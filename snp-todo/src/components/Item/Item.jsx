import React, { Component } from "react";
import styles from "./Item.module.css";

export default class Item extends Component {
  state = {
    isVisibleDeleteButton: false,
    isisEditing: false,
    text: ""
  };

  handleMouseOver = () => {
    this.setState({
      isVisibleDeleteButton: true
    });
  };

  handleMouseOut = () => {
    this.setState({
      isVisibleDeleteButton: false
    });
  };

  handleDoubleClick = () => {
    this.setState({
      isEditing: true,
      text: this.props.data.text
    });
  };

  handleInputFieldChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleInputFieldBlur = () => {
    const {
      editItem,
      deleteItem,
      data: { id }
    } = this.props;
    const { text } = this.state;
    if (text !== "" && text[0] !== " ") {
      editItem(id, text);
      this.setState({
        isEditing: false
      });
    } else {
      deleteItem(id);
    }
  };

  handleInputFieldKeyPress = event => {
    if (event.key === "Enter") {
      const {
        editItem,
        deleteItem,
        data: { id }
      } = this.props;
      const { text } = this.state;
      if (text !== "" && text[0] !== " ") {
        editItem(id, text);
        this.setState({
          isEditing: false
        });
      } else {
        deleteItem(id);
      }
    }
  };

  handleCheckboxChange = () => {
    const {
      data: { id },
      toggleItem
    } = this.props;
    toggleItem(id);
  };

  handleDeleteButtonClick = () => {
    const {
      data: { id },
      deleteItem
    } = this.props;
    deleteItem(id);
  };

  render() {
    const { data } = this.props;
    const { isEditing, text, isVisibleDeleteButton } = this.state;
    const styleDeleteButton = isVisibleDeleteButton
      ? styles.item__button_delete_view
      : styles.item__button_delete;
    const styleText = data.completed
      ? styles.item__text_completed
      : styles.item__text;
    const editBlock = isEditing ? (
      <input
        type="text"
        className={styles.item__edit}
        autoFocus
        value={text}
        onBlur={this.handleInputFieldBlur}
        onChange={this.handleInputFieldChange}
        onKeyPress={this.handleInputFieldKeyPress}
      />
    ) : null;

    return (
      <li
        className={styles.item}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <input
          type="checkbox"
          className={styles.item__checkbox}
          checked={data.completed}
          onChange={this.handleCheckboxChange}
        />
        <label className={styleText} onDoubleClick={this.handleDoubleClick}>
          {data.text}
        </label>
        <div
          className={styleDeleteButton}
          onClick={this.handleDeleteButtonClick}
        />
        {editBlock}
      </li>
    );
  }
}
