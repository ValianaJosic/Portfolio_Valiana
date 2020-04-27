import React from 'react';
import './projects.css';
import { Card, Button } from 'react-bootstrap';
import Thais from '../../assets/images/thais.png'


function Projects() {
  return (
    <div className='card-wrapper' >
    <Card className= 'card'style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem'}} variant="top" src={Thais} />
      <Card.Body>
        <Card.Title className='card-title'>Realtor Website</Card.Title>
        <Card.Text  className='card-text'>
          My first project ! Designed and developed Realtor website for client.
      </Card.Text>
        <Button className= 'card-btn' variant="primary"><a className= 'card-btn-font'href='https://thais.herokuapp.com/'  target="_blank" rel="noopener  noreferrer" >Check it out!</a></Button>
      </Card.Body>
    </Card>
    <Card className= 'card'style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem' }} variant="top" src={Thais} />
      <Card.Body>
        <Card.Title className='card-title'>Realtor Website</Card.Title>
        <Card.Text  className='card-text'>
          My first project ! Designed and developed Realtor website for client.
      </Card.Text>
        <Button className= 'card-btn' variant="primary"><a className= 'card-btn-font'href='https://thais.herokuapp.com/'  target="_blank" rel="noopener  noreferrer" >Check it out!</a></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Projects