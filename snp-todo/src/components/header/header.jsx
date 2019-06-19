import React from "react";
import header from "./header.module.css";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      textOfTheNewItem: ''
    };
  }

  render() {
    let { list } = this.props;
    let styleInputText = header.header__input;
    if (list.length === 0) {
      styleInputText = styleInputText + " " + header.header__input_primal;
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
          value={this.state.textOfTheNewItem}
          onChange={(e) => this.handleOnChange(e.target)}
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
      </>
    );
  }

  handleOnChange = (e) =>{
    this.setState({
      textOfTheNewItem: e.value
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.textOfTheNewItem[0] !== ' ' && this.state.textOfTheNewItem[1] !== ' ' && this.state.textOfTheNewItem !== ''){
      this.props.addNewItem({
        text: this.state.textOfTheNewItem,
        id: Date.now(),
        completed: false
      });
      this.setState({
        textOfTheNewItem: ''
      });
    }
  }
}
