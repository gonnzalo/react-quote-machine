import React, { Component } from "react";

import Quote from "./Quote";
import Author from "./Author";
import Btns from "./Btns";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => this.setState({ quote: data.quote }));
  }

  handleClick() {
    this.fetchData();
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="App">
        <Quote body={quote.body} />
        <Author author={quote.author} />
        <Btns clicks={this.handleClick} />
      </div>
    );
  }
}

export default App;
