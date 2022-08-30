import React from 'react'
import Navbarmain from '../components/Navbarmain'

// bootstrap
import { Button,Card, CardGroup, Container, Row, Col } from 'react-bootstrap';

import Icon from '../assets/img/Icon.svg'
import Icon2 from '../assets/img/icon2.svg'
import Rectangle from '../assets/img/Rectangle.svg'
import Waves from '../assets/img/Waves.svg'
import Rectangle1 from '../assets/img/Rectangle1.svg'

// import css
import '../styles/landing.css'

// css
import "../styles/navbarmain.css"

export default function Landing() {
  return (
    <>
    <Navbarmain/>
    <Container>
        <div className='mt-5 mb-3'>
            <div className="card-body d-flex">
                <div className='left-icon'>
                    <img className='logo' src={Icon2}/>
                    <p className='fs-4 mt-2 fw-semibold'>BEST QUALITY COFFE BEANS</p>
                    <p>Quality freshly roasted coffe made just for you.<br/>Pour, brew and enjoy</p>
                </div>
                <div className='right-icon'>
                    <div className='rectangle' >
                        <img src={Rectangle}/>
                    </div>
                    <div className='waves'>
                        <img src={Waves}/>
                    </div>
                </div>
            </div>
        </div>
        <Row className='list-product mb-3' style={{width:'958px', margin:"auto"}}>
            <Col sm={3} className="mb-3">
                <CardGroup>
                    <Card className='py-1 px-1'>
                        <Card.Img variant="top" src={Rectangle1} />
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card>
                </CardGroup>
            </Col>
        </Row>
    </Container>
    </>
  )
}
