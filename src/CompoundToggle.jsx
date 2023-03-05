import React from "react";
import Switch from "./Switch";

const ToggleContext = React.createContext();

class CompoundToggle extends React.Component {
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
  state = { on: true, toggle: this.toggle };

  static On = ({ children }) => {
    return (
      <ToggleContext.Consumer>
        {(contextValue) => contextValue.on ? children : null }
      </ToggleContext.Consumer>
    )
  }

  static Off = ({ children }) => {
    return (
      <ToggleContext.Consumer>
        {(contextValue) => contextValue.on ? null : children }
      </ToggleContext.Consumer>
    )
  }

  static Button = (props) => {
    return (
      <ToggleContext.Consumer>
        {({ on, toggle }) => <Switch on={on} onClick={toggle} {...props} /> }
      </ToggleContext.Consumer>
    )
  }


  render() {
    return (<ToggleContext.Provider value={this.state}>
      {this.props.children}
    </ToggleContext.Provider>)
  }
}

export default CompoundToggle;
