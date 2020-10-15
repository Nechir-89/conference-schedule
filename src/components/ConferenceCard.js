import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export default function ConferenceCard({ conferences, onShowCalendar, isCalendarShown }) {

  return (
    <Row>
      <Col>
        <img src={require('../images/cover.jpg')} className='cover-img' />
        <div className='form-position'>
          <form>
            <input type='text' placeholder='search' className='search-bar' />
            <button onClick={onShowCalendar} className='btn-calendar'>
              <FaCalendarAlt color='000' size={22} />
            </button>
            { isCalendarShown &&
                <input type='date' />
            }
          </form>
        </div>
        <div className='card-ml'>
          <ul className='grid space-around'>
            {
              conferences.map(
                (conference) => {
                  const { id, name, date, src } = conference

                  return (
                    <Card key={id} className='conference-card'>
                      <a href='/'>
                        <Card.Img src={src} className='card-image' />
                      </a>
                      <Card.Body>
                        <Card.Title className='card-title'>{name}</Card.Title>
                        <Card.Text className='card-text'>
                          <FaCalendarAlt color='#737373' size={15} className='icon-mr' /> {date}
                        </Card.Text>
                        <Card.Text>
                          <MdLocationOn color='#737373' size={15} className='icon-mr' /> Virtual
                        </Card.Text>                        
                      </Card.Body>
                    </Card>
                  )
                })
            }
          </ul>
        </div>
        <button className='btn-conferences'>Find all conferences</button>
      </Col>
    </Row>
  )
}