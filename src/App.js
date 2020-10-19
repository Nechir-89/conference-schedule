import React from 'react';
import Data from './data';
import ConferenceCard from './components/ConferenceCard';
import Nav from './components/Nav';
import ConferenceDetails from './components/ConferenceDetails';

// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conferences: Data,
      isDatepickerShown: false,
      selectedConfId: undefined,
      confName: '',
      confDesc: '',
      confSpeakers: [],
      imageSrc: ''
    }
    this.showDatepicker = this.showDatepicker.bind(this)
  }

  showDatepicker() {
    this.setState({
      isDatepickerShown: true
    }, () => console.log(this.state.isDatepickerShown))
  }

  render() {
    const { conferences, isDatepickerShown } = this.state

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ConferenceCard
              conferences={conferences}
              onShowCalendar={this.showDatepicker}
              isCalendarShown={isDatepickerShown}
              setData={(id, name, description, speakers, src2) =>
                id !== this.state.selectedConfId ?
                  this.setState({
                    selectedConfId: id,
                    confName: name,
                    confDesc: description,
                    confSpeakers: speakers,
                    imageSrc: src2
                  }) : ''
              }
            />
          </Route>
          <Route path="/ConferenceDetails/">
            <ConferenceDetails
              id={this.state.selectedConfId}
              name={this.state.confName}
              description={this.state.confDesc}
              speakers={this.state.confSpeakers}
              imageSrc={this.state.imageSrc}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
