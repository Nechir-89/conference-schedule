import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { Link } from "react-router-dom";

import {BsSearch} from 'react-icons/bs'
export default function ConferenceCard({ conferences, isCalendarShown, setData }) {

  return (
    <Row>
      <Col>
        {/* cover */}
        <img src={'/images/cover.jpg'} className='cover-img' alt='coverImage' />
        <header>
          <h1>Web Conferences</h1>
          <p>Find web conferences from all over the world in one place. and attend them in one platform.</p>
        </header>
        {/* search */}
        <div className='form-position'>
          <form className='conf-search'>
            <input type='text' placeholder='search' className='search-text' />
            <BsSearch />
            <button className='btn-calendar'>
              <FaCalendarAlt color='#202020' size={22} />
            </button>
          </form>
        </div>
        {/* conference cards */}
        <div className='card-ml'>
          <ul className='grid space-around'>
            {
              conferences.map((conference) => {
                const { id, name, date, time, src, description, speakers, src2, location } = conference;
                return (
                  <Card key={id} className='conference-card'>
                    {/* https://reactrouter.com/web/api/Link */}
                    <Link
                      to={"/conferenceDetails"}
                      onClick={() => setData(id, name, description, speakers, src2)}
                      className='conferenceLink'
                    >
                      <Card.Img src={src} className='card-image' />
                      <div className='countdown'>
                        <span className='timer'>00:00:06</span>
                        <span className='timeLabels'>Day Hrs Mins</span>
                      </div>
                    </Link>
                    <Card.Body className='card-body'>
                      <Card.Title className='card-title'>{name}</Card.Title>
                      <Card.Text className='card-text'>
                        <FaCalendarAlt color='#737373' size={15} className='icon-mr' /> {date} - {time}
                      </Card.Text>
                      <Card.Text>
                        <MdLocationOn color='#737373' size={15} className='icon-mr' /> {location}
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