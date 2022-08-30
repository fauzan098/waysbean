import React from 'react'
import Navbarmain from '../components/Navbarmain'

// bootstrap
import { Button,Card, CardGroup } from 'react-bootstrap';

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
    <div style={{width:'241px'}}>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={Rectangle1} />
                <Card>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card>
            </Card>
        </CardGroup>
    </div>
    </>
  )
}
