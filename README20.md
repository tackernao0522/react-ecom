## 346 Consume Notification History API Part1

+ `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = 'http://localhost/api'
  static VisitorDetails = this.BaseURL + '/getvisitor'
  static AllSiteInfo = this.BaseURL + '/allsiteinfo'
  static AllCategoryDetails = this.BaseURL + '/allcategory'
  static ProductListByRemark(remark) {
    return this.BaseURL + '/productlistbyremark/' + remark
  }
  static ProductListByCategory(category) {
    return this.BaseURL + '/productlistbycategory/' + category
  }
  static ProductlistBySubcategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    )
  }
  static AllSlider = this.BaseURL + '/allslider'
  static ProductDetails(code) {
    return this.BaseURL + '/productdetails/' + code
  }
  static NotificationHistory = this.BaseURL + '/notification' // 追記
}

export default AppURL
```


+ `src/components/notification/Notification.jsx`を編集<br>

```
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
```

## 347 Consume Notification History API Part2

+ `src/components/notification/Notification.jsx`を編集<br>

```
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
```
