import React, { Component, Fragment } from "react";
import { render } from "react-dom";

//reuse alredy use insed of another one
class Button extends Component {
  render() {
    return <a href="">Send</a>;
  }
}

//Create a component
class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello Sergio</h1>
        <Button />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
