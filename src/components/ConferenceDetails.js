import React from 'react'
import RegisterForm from './RegisterForm'
import LinkButton from './LinkButton'
// react router dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import '../conferenceDetails.css'


class ConferenceDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='conference-details'>
                {/* col 1 */}
                <div className='left-side'>
                    <figure className='conf-image'>
                        <img src={this.props.imageSrc} alt='' />
                    </figure>
                    <h2 className='figure-caption'>{this.props.name}</h2>
                </div>
                {/* col 2 */}
                <div className='right-side'>
                    <h1 className='conference-name'>{this.props.name}</h1>
                    <p className='conference-description'>
                        {this.props.description}
                    </p>
                    <h1 className='speakers-label'>Speakers</h1>
                    <div className='speakers'>
                        {
                            this.props.speakers.map(
                                speaker =>
                                    <figure key={speaker.id}>
                                        <img src={speaker.image} alt='speaker1' />
                                        <figcaption>
                                            <h3>{speaker.name}</h3>
                                            <p>{speaker.post + speaker.company}</p>
                                        </figcaption>
                                    </figure>
                            )
                        }

                    </div>
                    <div className='call-to-action'>
                        <LinkButton className='register-btn' to='RegisterForm'>Register Now</LinkButton>
                        <LinkButton className='agenda-btn'>Agenda</LinkButton>
                    </div>
                </div>

            </div>
        )
    }
}

export default ConferenceDetails;