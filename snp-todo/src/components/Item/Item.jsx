import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.css";
import { connect } from "react-redux";
import { deleteItem, toggleItem, editItem } from "../../actions/";

class Item extends PureComponent {
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
    const { value, isChecked } = this.props;
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
          checked={isChecked}
          onChange={this.handleCheckboxChange}
        />
        <label
          className={isChecked ? styles.textCompleted : styles.text}
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
  value: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number
  }),
  toggleItem: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
  isChecked: PropTypes.bool
};

export default connect(
  (state, ownProps) => ({
    isChecked: ownProps.value.completed
  }),
  { deleteItem, toggleItem, editItem }
)(Item);
