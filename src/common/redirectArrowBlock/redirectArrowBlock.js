import React, { Component } from "react";
import withLocation from "../../hocs/withLocation";

import "./redirectArrowBlock.css";

class RedirectArrowBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      installationKeyInput: "",
      collectorPortInput: ""
    };
  }

  componentWillMount() {
    const { search } = this.props;
    this.setState({
      installationKeyInput: search.name,
      collectorPortInput: search.token
    });
  }

  handleKeyInputChange = event => {
    this.setState({
      installationKeyInput: event.target.value
    });
  };

  handlePortInputChange = event => {
    this.setState({
      collectorPortInput: event.target.value
    });
  };

  render() {
    const { installationKeyInput, collectorPortInput } = this.state;

    return (
      <div className="redirectArrowBlockWrapper">
        <label>Installation key</label>
        <input
          type="text"
          value={installationKeyInput}
          onChange={this.handleKeyInputChange}
        />
        <label>Collector port</label>
        <input
          placeholder="6060"
          type="text"
          value={collectorPortInput}
          onChange={this.handlePortInputChange}
        />
      </div>
    );
  }
}

export default withLocation(RedirectArrowBlock);
