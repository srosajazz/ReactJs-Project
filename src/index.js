import React, { Component, Fragment } from "react";
import { render } from "react-dom";

//reuse alredy use insed of another one
class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

//Create a component
class App extends Component {
  handleClick() {
    alert("button clicked!");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello Sergio</h1>
        {/* <Button title="Jazzz" /> Proprity */}
        <Button onClick={this.handleClick}>Jazzzzzz</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
