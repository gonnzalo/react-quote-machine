import React, { Component } from "react";

import Quote from "./Quote";
import Author from "./Author";
import Btns from "./Btns";

import "./App.css";

const colors = [
  "#fd79a8",
  "#FFA726",
  "#00b894",
  "#5C6BC0",
  "#ffeaa7",
  "#636e72",
  "#ED4C67",
  "#4CAF50",
  "#95E6C1",
  "#D980FA"
];

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
      <div
        className="App"
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)]
        }}
      >
        <div className="container">
          <Quote body={quote.body || ""} />
          <Author author={quote.author || ""} />
          <Btns
            handleClick={this.handleClick}
            body={quote.body || ""}
            author={quote.author || ""}
          />
        </div>
      </div>
    );
  }
}

export default App;
