import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      showItems: "all"
    };
  }

  render() {
    let { list } = this.state;

    return (
      <>
        <Header list={list} addNewItem={this.addNewItem} />
        <Main
          list={list}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          showItems={this.state.showItems}
          toggleAllItems={this.toggleAllItems}
        />
        <Footer
          list={list}
          toggleShowItems={this.toggleShowItems}
          deleteCompletedItem={this.deleteCompletedItem}
        />
      </>
    );
  }

  componentDidMount() {
    let newList = JSON.parse(localStorage.getItem("list"));
    if (newList && this.state.list.length === 0) {
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
    let { list } = this.state;
    for (let key in list) {
      if (list[key].id === item.id) {
        list[key].completed = completed;
      }
    }
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({
      list: list
    });
  };

  deleteItem = item => {
    let { list } = this.state;
    list = list.filter(value => value.id !== item.id);
    if (!list) {
      list = [];
    }
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({
      list: list
    });
  };

  editItem = (item, text) => {
    console.log("edit2");
    let { list } = this.state;
    for (let key in list) {
      if (list[key].id === item.id) {
        list[key].text = text;
      }
    }
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({
      list: list
    });
  };

  toggleShowItems = value => {
    this.setState({
      showItems: value
    });
  };

  deleteCompletedItem = () => {
    let { list } = this.state;
    list = list.filter(value => !value.completed);
    if (!list) {
      list = [];
    }
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({
      list: list
    });
  };

  toggleAllItems = (checked) => {
    let { list } = this.state;
    for (let key in list){
      list[key].completed = checked;
    };
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({
      list: list
    });
  };
}
