import React from "react";
import BasicToggle from "./BasicToggle";

class UsageExample extends React.Component {

  state = {
    bothOn: false,
  }

  handleToggle = () => {
    this.setState(state => ({
      bothOn: !state.bothOn
    }))
  }

  render () {
    const { bothOn } = this.state;
    return (
      <div>
        <BasicToggle onToggle={this.handleToggle} on={bothOn} />
        <BasicToggle onToggle={this.handleToggle}  />
      </div>
    )
  }
}

export default UsageExample;
