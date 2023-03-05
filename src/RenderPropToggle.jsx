import React from "react";

class RenderPropToggle extends React.Component {
  static defaultProps = {
    onToggle: () => {},
    renderUI: () => {}
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
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}

export default RenderPropToggle;
