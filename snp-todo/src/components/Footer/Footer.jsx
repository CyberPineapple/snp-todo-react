import React from "react";
import styles from "./Footer.module.css";

export default class Footer extends React.Component {
  state = {
    radioValue: "all"
  };

  handleRadioChange = value => {
    this.props.toggleFilterTheItems(value);
    this.setState({
      radioValue: value
    });
  };

  handleButtonClearClick = () => {
    this.props.deleteCompletedItem();
  };

  render() {
    const { radioValue } = this.state;
    const { itemsList } = this.props;
    const activeItems = itemsList.filter(value => !value.completed);
    let styleButtonClearCompleted = styles.footer__delete_completed;
    let styleFooter = styles.footer;
    if (!!itemsList.length){
      styleFooter = styles.footer_view
    }
    if (activeItems.length !== itemsList.length){
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
          onChange={e => this.handleRadioChange(e.target.value)}
          checked={radioValue === "all"}
        />
        <label htmlFor="all" className={styles.footer__button}>
          all
        </label>
        <input
          type={"radio"}
          id="completed"
          value="completed"
          onChange={e => this.handleRadioChange(e.target.value)}
          checked={radioValue === "completed"}
        />
        <label htmlFor="completed" className={styles.footer__button}>
          completed
        </label>
        <input
          type={"radio"}
          id="active"
          value="active"
          onChange={e => this.handleRadioChange(e.target.value)}
          checked={radioValue === "active"}
        />
        <label htmlFor="active" className={styles.footer__button}>
          active
        </label>
        <div className={styleButtonClearCompleted} onClick={() => this.handleButtonClearClick()}>delete completed</div>
      </div>
    );
  };

}
