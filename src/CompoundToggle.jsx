import React from "react";
import Switch from "./Switch";

class CompoundToggle extends React.Component {
  static defaultProps = {
    onToggle: () => {}
  }
  static On = ({on, children}) => on ? children : null
  static Off = ({on, children}) => on ? null : children
  static Button = ({ on, toggle, ...props}) => (
    <Switch on={on} onClick={toggle} { ...props } />
  )

  toggle = () =>
    this.setState(
      (currentState) => ({
        on: !currentState.on
      }),
      () => this.props.onToggle(this.state.on)
    );
  state = { on: true };

  render() {
    return React.Children.map(this.props.children, childElement => {
      return React.cloneElement(childElement, {
        on: this.state.on,
        toggle: this.toggle,
      })
    })
  }
}

export default CompoundToggle;
