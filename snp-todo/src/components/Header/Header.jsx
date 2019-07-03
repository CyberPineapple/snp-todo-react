import React, { Component, Fragment } from "react";
import header from "./Header.module.css";

export default class Header extends Component {
  state = {
    textOfTheNewItem: ""
  };

  handleChange = event => {
    this.setState({
      textOfTheNewItem: event.target.value
    });
  };

  handleKeyPress = event => {
    const { addNewItem } = this.props;
    const { textOfTheNewItem } = this.state;
    if (
      event.key === "Enter" &&
      textOfTheNewItem[0] !== " " &&
      textOfTheNewItem[1] !== " " &&
      textOfTheNewItem !== ""
    ) {
      addNewItem({
        text: textOfTheNewItem,
        id: Date.now(),
        completed: false
      });
      this.setState({
        textOfTheNewItem: ""
      });
    }
  };

  render() {
    const { isChangedInput } = this.props;
    const { textOfTheNewItem } = this.state;
    let styleInputText = header.header__input;
    if (isChangedInput) {
      styleInputText = header.header__input_primal;
    }

    return (
      <Fragment>
        <div className={header.logo}>
          <div className={header.pacman}>
            <div className={header.pacman__item1} />
            <div className={header.pacman__item2} />
          </div>
          <div className={header.ghosts}>
            <div className={header.ghost}>
              <div
                className={header.ghost__item1 + " " + header.ghost__color_red}
              >
                <div className={header.eyes} />
                <div className={header.eyes} />
              </div>
              <div
                className={header.ghost__item2 + " " + header.ghost__color_red}
              />
              <div
                className={header.ghost__item3 + " " + header.ghost__color_red}
              />
              <div
                className={header.ghost__item4 + " " + header.ghost__color_red}
              />
            </div>
            <div className={header.ghost}>
              <div
                className={header.ghost__item1 + " " + header.ghost__color_blue}
              >
                <div className={header.eyes} />
                <div className={header.eyes} />
              </div>
              <div
                className={header.ghost__item2 + " " + header.ghost__color_blue}
              />
              <div
                className={header.ghost__item3 + " " + header.ghost__color_blue}
              />
              <div
                className={header.ghost__item4 + " " + header.ghost__color_blue}
              />
            </div>
            <div className={header.ghost}>
              <div
                className={
                  header.ghost__item1 + " " + header.ghost__color_orange
                }
              >
                <div className={header.eyes} />
                <div className={header.eyes} />
              </div>
              <div
                className={
                  header.ghost__item2 + " " + header.ghost__color_orange
                }
              />
              <div
                className={
                  header.ghost__item3 + " " + header.ghost__color_orange
                }
              />
              <div
                className={
                  header.ghost__item4 + " " + header.ghost__color_orange
                }
              />
            </div>
          </div>
        </div>
        <input
          className={styleInputText}
          type="text"
          autoFocus
          placeholder="What needs to be done?"
          value={textOfTheNewItem}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </Fragment>
    );
  }
}
