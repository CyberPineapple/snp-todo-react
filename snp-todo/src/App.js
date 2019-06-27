import React from "react";
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
    const newList = itemsList.map(value => {
      if (value.id === itemId){
        value.completed = !value.completed;
      }
      return value;
    });
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
    const newList = itemsList.map(value => {
      if (value.id === itemId){
        value.text = text;
      }
      return value;
    });
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      itemsList: newList
    });
  };

  toggleFilterTheItems = value => {
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
    let newList = this.state.itemsList;
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
      <>
        <Header itemsList={itemsList} addNewItem={this.addNewItem} />
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
          toggleFilterTheItems={this.toggleFilterTheItems}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </>
    );
  }
}
