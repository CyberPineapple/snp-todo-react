import React, { Component } from "react";
import PropType from "prop-types";
import styles from "./Item.module.css";

export default class Item extends Component {
  state = {
    isVisibleDeleteButton: false,
    isEditing: false,
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
      text: this.props.value.text
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
      value: { id }
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
        value: { id }
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
      value: { id },
      toggleItem
    } = this.props;
    toggleItem(id);
  };

  handleDeleteButtonClick = () => {
    const {
      value: { id },
      deleteItem
    } = this.props;
    deleteItem(id);
  };

  render() {
    const { value } = this.props;
    const { isEditing, text, isVisibleDeleteButton } = this.state;

    return (
      <li
        className={styles.block}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={value.completed}
          onChange={this.handleCheckboxChange}
        />
        <label
          className={value.completed ? styles.textCompleted : styles.text}
          onDoubleClick={this.handleDoubleClick}
        >
          {value.text}
        </label>
        {isVisibleDeleteButton && (
          <button
            className={styles.buttonDelete}
            onClick={this.handleDeleteButtonClick}
          />
        )}
        {isEditing && (
          <input
            type="text"
            className={styles.edit}
            autoFocus
            value={text}
            onBlur={this.handleInputFieldBlur}
            onChange={this.handleInputFieldChange}
            onKeyPress={this.handleInputFieldKeyPress}
          />
        )}
      </li>
    );
  }
}

Item.propTypes = {
  value: PropType.shape({
    text: PropType.string,
    completed: PropType.bool,
    id: PropType.number
  }),
  toggleItem: PropType.func,
  deleteItem: PropType.func,
  editItem: PropType.func
};
