import React from 'react';
import { Container } from 'react-bootstrap';
import Data from './data';
import ConferenceCard from './components/ConferenceCard';
import Nav from './components/Nav';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      conferences: Data
    }
  }

  render() {
    const { conferences } = this.state

    return (
      <Container>
        <h1 style={{textAlign:'center'}}>Conference Schedule</h1>
        {/* <pre>{JSON.stringify(this.state.conferences, null, 2)}</pre> */}
        <Nav />
        <ConferenceCard conferences={conferences} />
      </Container>
    );
  }
}


export default App;
