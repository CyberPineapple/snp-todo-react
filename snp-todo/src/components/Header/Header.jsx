import React from "react";
import header from "./Header.module.css";

export default class Header extends React.Component {
  state = {
    textOfTheNewItem: ""
  };

  handleChange = value => {
    this.setState({
      textOfTheNewItem: value
    });
  };

  handleKeyPress = e => {
    const { addNewItem } = this.props;
    const { textOfTheNewItem } = this.state;
    if (
      e.key === "Enter" &&
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
    const { itemsList } = this.props;
    const { textOfTheNewItem } = this.state;
    let styleInputText = header.header__input;
    if (!itemsList.length) {
      styleInputText = header.header__input_primal;
    }

    return (
      <>
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
          onChange={e => this.handleChange(e.target.value)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
      </>
    );
  }

}
