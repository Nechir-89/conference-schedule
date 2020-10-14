import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function ConferenceCard({ conferences }) {

  return (
    <Row>
      <Col>
        <img src={require('../images/cover.jpg')} className='cover-img' />
        <ul className='grid space-around'> 
          {
            conferences.map((conference) => {
              const { id, name, date, src } = conference

              return (
                <Card key={id} className='conference-card'>
                  <Card.Img src={src} className='card-image'/> 
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