import React from "react";
import RenderPropToggle from "./RenderPropToggle";
import Switch from "./Switch";

class Usage extends React.Component {
  initialState = {timesClicked: 0}
  state = this.initialState

  handleToggle = (...args) => {
    this.setState(state => {
      return {
        timesClicked: state.timesClicked + 1,
      }
    }, () => {
      console.log("onToggle", ...args)
    })
  }
  handleReset = () => {
    this.setState(this.initialState)
  }
  onButtonClick = () => {
    alert("onButtonClick called");
  }

  stateReducer = (state, changes) => {
    if (changes.type === RenderPropToggle.stateChangeTypes.force) {
      return changes;
    }
    if (this.state.timesClicked >= 4) {
      return {
        ...changes,
        on: false,
      }
    }
    return changes;
  }
  render() {
    const { timesClicked } = this.state;
    return (
      <RenderPropToggle
        stateReducer={this.stateReducer}
        onToggle={this.handleToggle}
        onReset={this.handleReset}
        initialOn
      >
        {({ on, reset, toggle, getTogglerProps }) => (
          <div>
            <Switch {...getTogglerProps({ on })} />
            {
              timesClicked > 4 ? (
                <div>
                  <p>Clicked too many times</p>
                  <button
                    onClick={() => toggle({type: RenderPropToggle.stateChangeTypes.force})}>
                      Force Toggle
                    </button>
                </div>
              ) : (
                timesClicked > 0 ? `You clicked ${timesClicked} times` : null
              )
            }
            <hr />
            <button onClick={reset}>Reset</button>
          </div>
        )}
      </RenderPropToggle>
    );

  }
}

export default Usage;
