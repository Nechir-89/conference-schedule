import React from 'react'

import '../conferenceDetails.css'


class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
      return (
        <div className='contact-form'> 
          <div className='left-side'>
          <figure className='conf-image'>
            <img src={this.props.imageSrc} alt='' />
            </figure>
            <h2 className='figure-caption'>{this.props.name}</h2>
          </div>
          <div className='right-side'>
            <button>></button>
            <button>Agenda</button>
            <form> 
              <label for='first_name'>First Name *</label>
              <input type='text' name='first_name' />
              <label for='last_name'>Last Name *</label>
              <input type='text' name='last_name' />
              <label for='email'>Email *</label>
              <input type='text' name='email' />
              <label for='password'>Password</label>
              <input type='text' name='password' />
              <label for='country'>Country</label>
              <input type='text' name='country' />
              <label for='job_title'>Job Title</label>
              <input type='text' name='job_title' />
              <input type='checkbox' name='conditional_term' />
              <label for='conditional_term'>Agree on conditional terms of use and privacy policies</label>
              <button className='register'>Register</button>
            </form>
          </div>
        </div>
      )
    }
  }