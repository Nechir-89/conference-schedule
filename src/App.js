import React from 'react';
import Data from './data';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      conferences: Data
    }
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Conference Schedule</h1>
        <pre>{JSON.stringify(this.state.conferences, null, 2)}</pre>
      </div>
    );
  }
}


export default App;
