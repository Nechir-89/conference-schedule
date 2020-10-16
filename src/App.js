import React from 'react';
import { Container } from 'react-bootstrap';
import Data from './data';
import ConferenceCard from './components/ConferenceCard';
import Nav from './components/Nav';
import ConferenceDetails from './components/ConferenceDetails';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conferences: Data,
      isDatepickerShown: false
    }

    this.showDatepicker = this.showDatepicker.bind(this)
  }

  showDatepicker () {
    this.setState({
      isDatepickerShown: true
    }, () => console.log(this.state.isDatepickerShown))
  }

  render() {
    const { conferences, isDatepickerShown } = this.state

    return (
      <Container className='bg-color'>
        {/* <pre>{JSON.stringify(this.state.conferences, null, 2)}</pre> */}
        <Nav />

        <ConferenceCard 
          conferences={conferences}
          onShowCalendar={this.showDatepicker}
          isCalendarShown={isDatepickerShown}
        />

        {/* <ConferenceDetails /> */}
      </Container>
    );
  }
}


export default App;
