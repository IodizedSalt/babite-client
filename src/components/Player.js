import React, { Component } from 'react'
import '../static/css/player.css'
import { Row,  Container, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'


export default class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (

      <Container fluid >
        <Row className="player-row">
          <Col xs={{ span: 8, offset: 2 }} className="player-container">
<<<<<<< HEAD
            <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=3_5HRj32YeQ&ab_channel=BaumgartnerRestoration' playing />
=======
            {/* This line below is needed, but commented for now*/}
            {/* <ReactPlayer width="100%" height="100%" url='https://www.twitch.tv/j4ckiechan' playing /> */}
>>>>>>> c4beda9f5b022800807ae34559b9a5875ab161e9
          </Col>
        </Row>
      </Container>

  )}
}
