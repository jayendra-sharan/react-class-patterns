import React from "react";


const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))
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

  initialState = { on: true }
  state = this.initialState;

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
      reset: this.reset,
    }
  }

  reset = () => {
    this.setState(this.initialState);
  }

  getTogglerProps = ({onClick, ...props}) => {
    return {
      ...props,
      'aria-pressed': this.state.on,
      onClick: callAll(onClick, this.toggle),
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

export default RenderPropToggle;
