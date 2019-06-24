import React from "react";
import styles from "./Footer.module.css";

export default class Footer extends React.Component {
  state = {
    radioValue: "all"
  };

  render() {
    let activeItems = this.props.list.filter(value => !value.completed);
    let styleButtonClearCompleted = styles.footer__delete_completed;
    let styleFooter = styles.footer;
    if (this.props.list.length > 0){
      styleFooter = styles.footer_view
    }
    if (activeItems.length !== this.props.list.length){
      styleButtonClearCompleted = styles.footer__delete_completed_view
    }

    return (
      <div className={styleFooter}>
        <p className={styles.footer__counter}>
          items left {activeItems.length}
        </p>
        <input
          type={"radio"}
          id="all"
          value="all"
          onChange={e => this.handleRadioChange(e)}
          checked={this.state.radioValue === "all"}
        />
        <label htmlFor="all" className={styles.footer__button}>
          all
        </label>
        <input
          type={"radio"}
          id="completed"
          value="completed"
          onChange={e => this.handleRadioChange(e)}
          checked={this.state.radioValue === "completed"}
        />
        <label htmlFor="completed" className={styles.footer__button}>
          completed
        </label>
        <input
          type={"radio"}
          id="active"
          value="active"
          onChange={e => this.handleRadioChange(e)}
          checked={this.state.radioValue === "active"}
        />
        <label htmlFor="active" className={styles.footer__button}>
          active
        </label>
        <div className={styleButtonClearCompleted} onClick={() => this.handleButtonClearOnClick()}>delete completed</div>
      </div>
    );
  }

  handleRadioChange = e => {
    this.props.toggleShowItems(e.target.value);
    this.setState({
      radioValue: e.target.value
    });
  };

  handleButtonClearOnClick = () => {
    this.props.deleteCompletedItem();
  }
}
