import React, { Component, Fragment } from "react";
import Header from "./components/Header/";
import TodosList from "./components/TodosList/";
import Footer from "./components/Footer/";

export default class App extends Component {
  render() {

    return (
      <Fragment>
        <Header />
        <TodosList />
        <Footer />
      </Fragment>
    );
  }
};