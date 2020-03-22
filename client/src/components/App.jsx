import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state goes here
    };
  }

  render() {
    return (
      <div>
        <p>Time: {this.props.time}</p>
      </div>
    );
  }
}

export default App;