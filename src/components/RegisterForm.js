import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

// import '../conferenceDetails.css'


class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
      return (
        <div className='conference-details'> 

          <div className='left-side'>
          <figure className='conf-image'>
            <img src={this.props.imageSrc} alt='' />
            </figure>
            <h2 className='figure-caption'>{this.props.name}</h2>
          </div>

          <div className='right-side'>
            <div className='top-buttons'>
              <button className='back'>
                <IoIosArrowBack color='#000' size={30} />Back
              </button>
              <button className='agenda'>Agenda</button>
            </div>
            <form className='register-form'> 
              <ul className='form-elements'>
                <li className='form-item'>
                  <div className='first_name'>First Name *</div>
                  <input type='text' name='first_name' className='form-input-text' />
                </li>
                <li className='form-item'>
                  <div className='last_name'>Last Name *</div>
                  <input type='text' name='last_name' className='form-input-text' />
                </li>
                <li className='form-item'>
                  <label className='email'>Email *</label>
                  <input type='text' name='email' className='form-input-text' />
                </li>
                <li className='form-item'>
                  <label className='password'>Password</label>
                  <input type='text' name='password' className='form-input-text' />
                </li>
                <li className='form-item'>
                  <label className='country'>Country</label>
                  <input type='text' name='country' className='form-input-text' />
                </li>
                <li className='form-item'>
                  <label className='job_title'>Job Title</label>
                  <input type='text' name='job_title' className='form-input-text' />
                </li>
              </ul>

              <div className='conditional_term'>
                <input type='checkbox' name='conditional_term' checked />
                <label>Agree on conditional terms of use and privacy policies</label>
              </div>
              <button className='register'>Register</button>
            </form>
          </div>
        </div>
      )
    }
  }

  export default RegisterForm