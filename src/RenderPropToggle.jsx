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

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      togglerProps: {
        onClick: this.toggle,
        'aria-pressed': this.state.on
      }
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

export default RenderPropToggle;
