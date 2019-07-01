import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  state = {
    itemsList: JSON.parse(localStorage.getItem("list")) || [],
    activeFilter: "all"
  };

  addNewItem = value => {
    const { itemsList } = this.state;
    const newList = [...itemsList, value];
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  toggleItem = itemId => {
    const { itemsList } = this.state;
    const newList = [...itemsList];
    for (let key in newList) {
      if (newList[key].id === itemId) {
        newList[key].completed = !newList[key].completed;
        break;
      }
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  deleteItem = itemId => {
    const { itemsList } = this.state;
    const newList = itemsList.filter(value => value.id !== itemId);
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  editItem = (itemId, text) => {
    const { itemsList } = this.state;
    const newList = [...itemsList];
    for (let key in newList) {
      if (newList[key].id === itemId) {
        newList[key].text = text;
        break;
      }
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  setActiveFilter = value => {
    this.setState({
      activeFilter: value
    });
  };

  deleteCompletedItem = () => {
    const { itemsList } = this.state;
    const newList = itemsList.filter(value => !value.completed);
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  toggleAllItems = checked => {
    const { itemsList } = this.state;
    let newList = [...itemsList];
    for (let key in newList) {
      newList[key].completed = checked;
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  render() {
    const { itemsList } = this.state;

    return (
      <Fragment>
        <Header isChangedInput={!itemsList.length} addNewItem={this.addNewItem} />
        <Main
          itemsList={itemsList}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          activeFilter={this.state.activeFilter}
          toggleAllItems={this.toggleAllItems}
        />
        <Footer
          itemsList={itemsList}
          setActiveFilter={this.setActiveFilter}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </Fragment>
    );
  }
}
