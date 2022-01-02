import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class Notification extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      NotificationData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount() {
    axios
      .get(AppURL.NotificationHistory)
      .then((resp) => {
        console.log(resp)
        this.setState({
          NotificationData: resp.data,
          isLoading: '',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    const NotificationList = this.state.NotificationData
    const MyView = NotificationList.map((NotificationList, i) => (
      <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
        <Card onClick={this.handleShow} className="notification-card">
          <Card.Body>
            <h6>{NotificationList.title}</h6>
            <p className="py-1  px-0 text-primary m-0">
              <i className="fa  fa-bell"></i> Date: {NotificationList.date}|
              Status: Unread
            </p>
            <Button className="btn btn-danger">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    ))
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{MyView}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:11/05/2021
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>Woohoo, you're reading this text in a modal!</h6>
            <p>
              Each course has been hand-tailored to teach a specific skill. I
              hope you agree! Whether you’re trying to learn a new skill from
              scratch or want to refresh your memory on something you’ve learned
              in the past, you’ve come to the right place.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default Notification
