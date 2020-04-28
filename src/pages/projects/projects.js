import React from 'react';
import './projects.css';
import { Card, Button } from 'react-bootstrap';
import Thais from '../../assets/images/thais.png'
import Arcadia from '../../assets/images/arcadia.png'
import ToDo from '../../assets/images/todo.png'


function Projects() {
  return (
    <div className='card-wrapper' >
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img style={{ width: '288px', height: '136.03px' }} variant="top" src={Arcadia} />
        <Card.Body>
          <Card.Title className='card-title'>Arcadia</Card.Title>
          <Card.Text className='card-text'>
            Wyncode Final Project for Graduation day. Worked together with a UX/UI and developer team.(Mobile only)
      </Card.Text>
          <Button className='card-btn' variant="primary"><a className='card-btn-font' href='https://arcadiaivf.herokuapp.com/' target="_blank" rel="noopener  noreferrer" >Arcadia.com</a></Button>
        </Card.Body>
      </Card>

      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img style={{ width: '18rem',  height: '136.03px' }} variant="top" src={ToDo} />
        <Card.Body>
          <Card.Title className='card-title'>ToDo APP</Card.Title>
          <Card.Text className='card-text'>
            Built simple To Do application. Allows users to add, complete, and delete tasks.
      </Card.Text>
          <Button className='card-btn' variant="primary"><a className='card-btn-font' href='https://fullstacktasks-valiana-c35.herokuapp.com/' target="_blank" rel="noopener  noreferrer" >ToDoApp.com</a></Button>
        </Card.Body>
      </Card>

      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img style={{ width: '18rem' }} variant="top" src={Thais} />
        <Card.Body>
          <Card.Title className='card-title'>Realtor Website</Card.Title>
          <Card.Text className='card-text'>
            My first project as a graduated Full-Stack Web Developer ! Designed and developed Realtor website for client.
      </Card.Text>
          <Button className='card-btn' variant="primary"><a className='card-btn-font' href='https://thais.herokuapp.com/' target="_blank" rel="noopener  noreferrer" >Thaisreyes.com</a></Button>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default Projects