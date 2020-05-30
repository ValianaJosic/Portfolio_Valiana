import React, { Fragment } from 'react';
import './projects.css';
import { Card, Button } from 'react-bootstrap';
import Thais from '../../assets/images/thais.png'
import Arcadia from '../../assets/images/arcadia.png'
import ToDo from '../../assets/images/todo.png'
import Light from '../../assets/images/proj.jpeg'
import Port from '../../assets/images/port.jpeg'
import Maggie from '../../assets/images/maggie.png'


function Projects() {
  return (

    <Fragment>
      <div className='card-wrapper' >
        <Card className='card invis' style={{ width: '18rem' }}>
          <Card.Img style={{ width: '215px', height: '136.03px' }} variant="top" src={Arcadia} />
          <Card.Body>
            <Card.Title className='card-title'>Arcadia</Card.Title>
            <Card.Text className='card-text'>
              Wyncode Final Project for Graduation day. Worked together with a UX/UI and developer team.(Mobile only)
      </Card.Text>
            <Button className='card-btn' variant="primary"><a className='card-btn-font' href='https://arcadiaivf.herokuapp.com/' target="_blank" rel="noopener  noreferrer" >Arcadia</a></Button>
          </Card.Body>
        </Card>

        <Card className='card invis' style={{ width: '18rem' }}>
          <Card.Img style={{ width: '18rem', height: '136.03px' }} variant="top" src={ToDo} />
          <Card.Body>
            <Card.Title className='card-title'>ToDo APP</Card.Title>
            <Card.Text className='card-text'>
              Built simple To Do application. Allows users to add, complete, and delete tasks.
      </Card.Text>
            <Button className='card-btn' variant="primary"><a className='card-btn-font' href='https://fullstacktasks-valiana-c35.herokuapp.com/' target="_blank" rel="noopener  noreferrer" >ToDoApp</a></Button>
          </Card.Body>
        </Card>

        <Card className='card invis' style={{ width: '18rem' }}>
          <Card.Img style={{ width: '18rem', height: '136.03px' }} variant="top" src={Port} />
          <Card.Body>
            <Card.Title className='card-title'>First Portfolio</Card.Title>
            <Card.Text className='card-text'>
              Hello World ! My first Portfolio Site created after Wyncode graduation.
              HTML, CSS , JS.
      </Card.Text>
            <Button className='card-btn' variant="primary"><a className='card-btn-font' href='https://valianajosic.github.io/all_about_me/' target="_blank" rel="noopener  noreferrer" >FirstPortfolio</a></Button>
          </Card.Body>
        </Card>

        <Card className='card ' style={{ width: '18rem' }}>
          <Card.Img style={{ width: '18.2rem' }} variant="top" src={Maggie} />
          <Card.Body>
            <Card.Title className='card-title'>Coach Website</Card.Title>
            <Card.Text className='card-text'>
              Developer and designer for Spinning Coach personal web page.
              Still under development.
      </Card.Text>
            <Button className='card-btn thais-btn' variant="primary"><a className='card-btn-font thais-btn' href='https://www.maggiemijares.com/' target="_blank" rel="noopener  noreferrer" >SpinCoach</a></Button>
          </Card.Body>
        </Card>

      <Card className='card ' style={{ width: '18rem' }}>
          <Card.Img style={{ width: '18rem' }} variant="top" src={Thais} />
          <Card.Body>
            <Card.Title className='card-title'>Realtor Website</Card.Title>
            <Card.Text className='card-text'>
              My first project as a graduated Full-Stack Web Developer ! Designed and developed Realtor website for client.
      </Card.Text>
            <Button className='card-btn thais-btn' variant="primary"><a className='card-btn-font thais-btn' href='https://thais.herokuapp.com/' target="_blank" rel="noopener  noreferrer" >RealtorWeb</a></Button>
          </Card.Body>
        </Card>
      </div>
      <img alt='' src={Light} className='light'></img>
    </Fragment>
  );
}

export default Projects