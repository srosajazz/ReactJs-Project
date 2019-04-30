import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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

Button.defaultProps = {
  children: "Save"
};

Button.defaultProps = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

//Create a component
class App extends Component {
  handleClick() {
    alert("button clicked!");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello Sergio</h1>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Send</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
