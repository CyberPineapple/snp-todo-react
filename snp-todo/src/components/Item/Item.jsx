import React from "react";
import styles from "./Item.module.css";

export default class Item extends React.Component {
  state = {
    viewDeleteButton: false,
    editing: false,
    text: ""
  };

  handleOnMouseOver = () => {
    this.setState({
      viewDeleteButton: true
    });
  };

  handleOnMouseOut = () => {
    this.setState({
      viewDeleteButton: false
    });
  };

  handleOnDoubleClick = () => {
    this.setState({
      editing: true,
      text: this.props.data.text
    });
  };

  handleInputFieldOnChange = e => {
    this.setState({
      text: e.value
    });
  };

  handleInputFieldOnBlur = () => {
    const { id } = this.props.data;
    const { editItem, deleteItem } = this.props;
    const { text } = this.state;
    if (text !== "" && text[0] !== " ") {
      editItem(id, text);
      this.setState({
        editing: false
      });
    } else {
      deleteItem(id);
    }
  };

  handleInputFieldOnKeyPress = e => {
    if (e.key === "Enter") {
      const { id } = this.props.data;
      const { editItem, deleteItem } = this.props;
      const { text } = this.state;
      if (text !== "" && text[0] !== " ") {
        editItem(id, text);
        this.setState({
          editing: false
        });
      } else {
        deleteItem(id);
      }
    }
  };

  handleCheckboxChange = () => {
    const { data, toggleItem } = this.props;
    toggleItem(data.id);
  }

  handleDeleteButtonClick = () => {
    const { data, deleteItem } = this.props;
    deleteItem(data.id);
  }

  render() {
    const { data } = this.props;
    const { editing, text } = this.state;
    let styleDeleteButton = styles.item__button_delete;
    let styleText = styles.item__text;
    let editBlock;
    if (this.state.viewDeleteButton) {
      styleDeleteButton = styles.item__button_delete_view;
    }
    if (data.completed) {
      styleText = styles.item__text_completed;
    }
    if (editing) {
      editBlock = (
        <input
          type="text"
          className={styles.item__edit}
          autoFocus
          value={text}
          onBlur={() => this.handleInputFieldOnBlur()}
          onChange={e => this.handleInputFieldOnChange(e.target)}
          onKeyPress={e => this.handleInputFieldOnKeyPress(e)}
        />
      );
    }

    return (
      <li
        className={styles.item}
        onMouseOver={() => this.handleOnMouseOver()}
        onMouseOut={() => this.handleOnMouseOut()}
      >
        <input
          type="checkbox"
          className={styles.item__checkbox}
          checked={data.completed}
          onChange={() => this.handleCheckboxChange()}
        />
        <label
          className={styleText}
          onDoubleClick={() => this.handleOnDoubleClick()}
        >
          {data.text}
        </label>
        <div
          className={styleDeleteButton}
          onClick={() => this.handleDeleteButtonClick()}
        />
        {editBlock}
      </li>
    );
  }

}
