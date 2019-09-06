import React, { Component, useState } from "react";
import withLocation from "../../hocs/withLocation";

import "./redirectArrowBlock.css";

class RedirectArrowBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      installationKeyValue: "",
      collectorPortValue: ""
    };
  }

  componentWillMount() {
    const { search } = this.props;
    this.setState({
      installationKeyValue: search.name,
      collectorPortValue: search.token
    });
  };

  handleKeyInputChange = event => {
    this.setState({
      installationKeyValue: event.target.value
    });
  };

  handlePortInputChange = event => {
    this.setState({
      collectorPortValue: event.target.value
    });
  };

  render() {
    const { installationKeyValue, collectorPortValue } = this.state;

    return (
      <div className="redirectArrowBlockWrapper">
        <label>Installation key</label>
        <input
          type="text"
          value={installationKeyValue}
          onChange={this.handleKeyInputChange}
        />
        <label>Collector port</label>
        <input
          placeholder="6060"
          type="text"
          value={collectorPortValue}
          onChange={this.handlePortInputChange}
        />
      </div>
    );
  }
}

export default withLocation(RedirectArrowBlock);

// http://localhost:8000/introduction/2-intro-to-the-reliability/?name=TestUser&token=123_123
