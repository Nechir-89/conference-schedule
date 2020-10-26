import React from 'react';
import Data from './data';
import ConferenceCard from './components/ConferenceCard';
import Nav from './components/Nav';
import ConferenceDetails from './components/ConferenceDetails';
import RegisterForm from './components/RegisterForm'

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

  //onShowCalendar={this.showDatepicker}
  //isCalendarShown={isDatepickerShown}
  render() {
    const { conferences } = this.state

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ConferenceCard
              conferences={conferences}
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
          <Route path="/RegisterForm/">
            <RegisterForm 
              id={this.state.selectedConfId}
              name={this.state.confName}
              imageSrc={this.state.imageSrc}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
