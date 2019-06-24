import React from "react";
import styles from "./Item.module.css";

export default class Item extends React.Component {
  state = {
    viewDeleteButton: false,
    editing: false,
    text: ""
  };

  render() {
    const { data } = this.props;
    let styleDeleteButton = styles.item__button_delete;
    let styleText = styles.item__text;
    let editBlock;
    if (this.state.viewDeleteButton) {
      styleDeleteButton = styles.item__button_delete_view;
    }
    if (data.completed) {
      styleText = styles.item__text_completed;
    }
    if (this.state.editing) {
      editBlock = (
        <input
          type="text"
          className={styles.item__edit}
          autoFocus
          value={this.state.text}
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
          onChange={() => this.props.toggleItem(data, !data.completed)}
        />
        <label
          className={styleText}
          onDoubleClick={() => this.handleOnDoubleClick()}
        >
          {data.text}
        </label>
        <div
          className={styleDeleteButton}
          onClick={() => this.props.deleteItem(data)}
        />
        {editBlock}
      </li>
    );
  }

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
    if (this.state.text !== "" && this.state.text[0] !== " ") {
      this.props.editItem(this.props.data, this.state.text);
      this.setState({
        editing: false
      });
    } else {
      this.props.deleteItem(this.props.data);
    }
  };

  handleInputFieldOnKeyPress = e => {
    if (e.key === "Enter") {
      if (this.state.text !== "" && this.state.text[0] !== " ") {
        this.props.editItem(this.props.data, this.state.text);
        this.setState({
          editing: false
        });
      } else {
        this.props.deleteItem(this.props.data);
      }
    }
  };
}
