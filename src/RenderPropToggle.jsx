import React from "react";


const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))
class RenderPropToggle extends React.Component {
  static defaultProps = {
    onToggle: () => {},
    renderUI: () => {},
    initialOn: false,
  }

  static stateChangeTypes = {
    reset: '__reset__',
    toggle: '__toggle__',
    force: '__force__',
  }

  toggle = ({ type = RenderPropToggle.stateChangeTypes.toggle } = {}) =>
    this.internalSetstate(
      (currentState) => ({
        on: !currentState.on,
        type,
      }),
      () => this.props.onToggle(this.state.on)
    );

  initialState = { on: this.props.initialOn }
  state = this.initialState;
  
  internalSetstate(changes, callback) {
    this.setState(state => {
      const changesObject = typeof changes === "function" ? changes(state) : changes;
      const reducedChanges = this.props.stateReducer(state, changesObject)
      const {type: ignoreType, ...stateChanges } = reducedChanges;
      return stateChanges;
    }, callback);
  }

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
      reset: this.reset,
    }
  }

  reset = () => {
    this.internalSetstate({...this.initialState, type: RenderPropToggle.stateChangeTypes.reset}, () => {
      this.props.onReset(this.initialState)
    });
  }

  getTogglerProps = ({onClick, ...props}) => {
    return {
      ...props,
      'aria-pressed': this.state.on,
      onClick: callAll(onClick, () => this.toggle()),
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

export default RenderPropToggle;
