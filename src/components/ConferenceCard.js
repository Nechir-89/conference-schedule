import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function ConferenceCard({ conferences }) {

  return (
    <Row>
      <Col>
        <ul className='grid space-around'>
          {
            conferences.map(
              (conference) => {
                const { id, name, date } = conference;
                return (

                  <Card key={id} className='conference-card'>
                    <a href='/'>
                      <Card.Img src={'/images/conference.svg'} className='card-image' />
                    </a>
                    <Card.Body>
                      <Card.Title class='card-title center-text'>{name}</Card.Title>
                      <Card.Text class='card-text center-text'>{date}</Card.Text>
                    </Card.Body>
                  </Card>
                )
              })
          }
        </ul>
      </Col>
    </Row>
  )
}