import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

//Create a component
class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount(prevProps, prevState) {}

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.counter <= 10;
  // }

  // componentWillMount() {}

  handleClick = () => {
    //   this.setState({ counter: this.state.counter + 1 });
    //   this.setState({ counter: this.state.counter + 1 });
    // });
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
