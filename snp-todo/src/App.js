import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {

  state = {
    list: [],
    typeOfItems: "all"
  };

  componentDidMount() {
    const { list } = this.state;
    let newList = JSON.parse(localStorage.getItem("list"));
    if (newList && !list.length) {
      this.setState({
        list: JSON.parse(localStorage.getItem("list"))
      });
    }
  }

  addNewItem = value => {
    localStorage.setItem("list", JSON.stringify(this.state.list.concat(value)));
    this.setState({
      list: this.state.list.concat(value)
    });
  };

  toggleItem = (item, completed) => {
    let newList = this.state.list;
    for (let key in newList) {
      if (newList[key].id === item.id) {
        newList[key].completed = completed;
      }
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      list: newList
    });
  };

  deleteItem = item => {
    let newList = this.state.list;
    newList = newList.filter(value => value.id !== item.id);
    if (!newList) {
      newList = [];
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      list: newList
    });
  };

  editItem = (item, text) => {
    let newList = this.state.list;
    for (let key in newList) {
      if (newList[key].id === item.id) {
        newList[key].text = text;
      }
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      list: newList
    });
  };

  toggleShowItems = value => {
    this.setState({
      typeOfItems: value
    });
  };

  deleteCompletedItem = () => {
    let newList = this.state.list;
    newList = newList.filter(value => !value.completed);
    if (!newList) {
      newList = [];
    }
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      list: newList
    });
  };

  toggleAllItems = (checked) => {
    let newList = this.state.list;
    for (let key in newList){
      newList[key].completed = checked;
    };
    localStorage.setItem("list", JSON.stringify(newList));
    this.setState({
      list: newList
    });
  };

  render() {
    const { list } = this.state;

    return (
      <>
        <Header list={list} addNewItem={this.addNewItem} />
        <Main
          list={list}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          typeOfItems={this.state.typeOfItems}
          toggleAllItems={this.toggleAllItems}
        />
        <Footer
          list={list}
          toggleShowItems={this.toggleShowItems}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </>
    );
  };
}
