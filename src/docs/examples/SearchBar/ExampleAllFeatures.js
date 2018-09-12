import React from "react";
import SearchBar from "ps-react/SearchBar";

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onRequestSearchHandler(query) {
    console.log('HOHO, you are searching for...', query);
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          onChange={newValue => this.setState({ value: newValue })}
          onRequestSearch={() => this.onRequestSearchHandler(this.state.value)}
        />
      </div>
    );
  }
}

export default ExampleAllFeatures;
