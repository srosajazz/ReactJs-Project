import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

//reuse alredy use insed of another one
class Button extends Component {
  static defaultProps = {
    children: "Save"
  };

  static defaultProps = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

//Create a component
class App extends Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    //console.log("render");
    return (
      <Fragment>
        <h1>Hello Sergio</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Sum</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
