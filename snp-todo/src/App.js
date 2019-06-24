import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {

  state = {
    listOfItems: [],
    typeOfItems: "all"
  };

  componentDidMount() {
    const { listOfItems } = this.state;
    let newList = JSON.parse(localStorage.getItem("list"));
    if (newList && !listOfItems.length) {
      this.setState({
        listOfItems: JSON.parse(localStorage.getItem("list"))
      });
    }
  }

  addNewItem = value => {
    localStorage.setItem("list", JSON.stringify(this.state.listOfItems.concat(value)));
    this.setState({
      listOfItems: this.state.listOfItems.concat(value)
    });
  };

  toggleItem = (item, completed) => {
    let newList = this.state.listOfItems;
    for (let key in newList) {
      if (newList[key].id === item.id) {
        newList[key].completed = completed;
      }
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      listOfItems: newList
    });
  };

  deleteItem = item => {
    let newList = this.state.listOfItems;
    newList = newList.filter(value => value.id !== item.id);
    if (!newList) {
      newList = [];
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      listOfItems: newList
    });
  };

  editItem = (item, text) => {
    let newList = this.state.listOfItems;
    for (let key in newList) {
      if (newList[key].id === item.id) {
        newList[key].text = text;
      }
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      listOfItems: newList
    });
  };

  toggleShowItems = value => {
    this.setState({
      typeOfItems: value
    });
  };

  deleteCompletedItem = () => {
    let newList = this.state.listOfItems;
    newList = newList.filter(value => !value.completed);
    if (!newList) {
      newList = [];
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      listOfItems: newList
    });
  };

  toggleAllItems = (checked) => {
    let newList = this.state.listOfItems;
    for (let key in newList){
      newList[key].completed = checked;
    };
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      listOfItems: newList
    });
  };

  render() {
    const { listOfItems } = this.state;

    return (
      <>
        <Header list={listOfItems} addNewItem={this.addNewItem} />
        <Main
          list={listOfItems}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          typeOfItems={this.state.typeOfItems}
          toggleAllItems={this.toggleAllItems}
        />
        <Footer
          list={listOfItems}
          toggleShowItems={this.toggleShowItems}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </>
    );
  };
}
