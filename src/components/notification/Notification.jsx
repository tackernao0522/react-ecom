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
      NotificationMsg: '',
      NotificationTitle: '',
      NotificationDate: '',
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
          isLoading: 'd-none',
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

  handleShow = (event) => {
    this.setState({ show: true })
    let Nmsg = event.target.getAttribute('data-message')
    let Ntitle = event.target.getAttribute('data-title')
    let Ndate = event.target.getAttribute('data-date')
    this.setState({
      NotificationMsg: Nmsg,
      NotificationTitle: Ntitle,
      NotificationDate: Ndate,
    })
  }

  render() {
    const NotificationList = this.state.NotificationData
    const MyView = NotificationList.map((NotificationList, i) => (
      <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
        <Card onClick={this.handleShow} className="notification-card">
          <Card.Body
            data-title={NotificationList.title}
            data-date={NotificationList.date}
            data-message={NotificationList.message}
          >
            <h6
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
            >
              {NotificationList.title}
            </h6>
            <p
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
              className="py-1  px-0 text-primary m-0"
            >
              <i className="fa  fa-bell"></i> Date: {NotificationList.date}|
              Status: Unread
            </p>
            <Button
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
              className="btn btn-danger"
            >
              Details
            </Button>
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
              <i className="fa fa-bell"></i> Date: {this.state.NotificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.NotificationTitle}</h6>
            <p>{this.state.NotificationMsg}</p>
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
