import React from "react";
import Switch from "./Switch";

class BasicToggle extends React.Component {
  static defaultProps = {
    onToggle: () => {}
  }
  getState() {
    return {
      on: this.props.on !== undefined ? this.props.on : this.state.on
    }
  }
  toggle = () =>
    this.setState(
      (currentState) => ({
        on: !currentState.on
      }),
      () => this.props.onToggle(this.state.on)
    );
  state = { on: false };
  render() {
    return <Switch on={this.getState().on} onClick={this.toggle} />;
  }
}

export default BasicToggle;
