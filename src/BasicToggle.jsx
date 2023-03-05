import React from "react";
import Switch from "./Switch";

class BasicToggle extends React.Component {
  static defaultProps = {
    onToggle: () => {}
  }
  toggle = () =>
    this.setState(
      (currentState) => ({
        on: !currentState.on
      }),
      () => this.props.onToggle(this.state.on)
    );
  state = { on: true };
  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />;
  }
}

export default BasicToggle;
