import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
import TodosList from "./components/TodosList/TodosList";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
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
      activeFilter: value.target.value
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
    const { itemsList, activeFilter } = this.state;
    const activeItems = itemsList.filter(value => !value.completed);
    const footer = itemsList.length ? (
      <Footer
        setActiveFilter={this.setActiveFilter}
        deleteCompletedItem={this.deleteCompletedItem}
        activeFilter={activeFilter}
        isVisibleDeleteButton={activeItems.length !== itemsList.length}
        countActiveItems={activeItems.length}
      />
    ) : null;
    const todosList = itemsList.length ? (
      <TodosList
        itemsList={itemsList}
        toggleItem={this.toggleItem}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
        activeFilter={activeFilter}
        toggleAllItems={this.toggleAllItems}
      />
    ) : null;

    return (
      <Fragment>
        <Header
          isChangedInput={!itemsList.length}
          addNewItem={this.addNewItem}
        />
        {todosList}
        {footer}
      </Fragment>
    );
  }
}
