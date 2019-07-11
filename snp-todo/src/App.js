import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
import TodosList from "./components/TodosList/TodosList";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";

class App extends Component {
  render() {

    return (
      <Fragment>
        <Header />
        <TodosList />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    itemsList: store.itemsList
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
