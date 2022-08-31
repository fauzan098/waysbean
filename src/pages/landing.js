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
                    <Card className='py-1 px-1' style={{backgroundColor:'#F7E6DA'}}>
                        <Card.Img variant="top" src={Rectangle1} />
                        <p style={styles.titleproduct}>RWANDA Beans</p>
                        <p style={styles.price}>Rp.299.900</p>
                        <p style={styles.stock}>stock : 200</p>
                        </Card>
                </CardGroup>
            </Col>
        </Row>
    </Container>
    </>
  )
}

const styles = {
    titleproduct:{
        color: '#613D2B',
        fontWeight: 900,
        fontSize :18
    },
    price:{
        color: '#974A4A',
        fontWeight: 400,
        fontSize :14,
        lineHeight: '19px',
        marginBottom: '5px'
    },
    stock:{
        color: '#974A4A',
        fontWeight: 400,
        fontSize :14,
        lineHeight: '19px',
        marginBottom: '5px'
    }
}
