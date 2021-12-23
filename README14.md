## 298 Consume Visitor Details API Form Client

+ `$ npm install axios`を実行<br>

+ `src/api`ディレクトリを作成<br>

+ `src/api/AppURL.jsx`コンポーネントを作成<br>

```
class AppURL {
  static BaseURL = "http://localhost/api"
  static VisitorDetails = this.BaseURL + "/getvisitor"
}

export default AppURL
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import NavMenuDeskTop from '../components/common/NavMenuDesktop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
    this.GetVisitorDetails()
  }

  GetVisitorDetails = () => {
    axios
      .get(AppURL.VisitorDetails)
      .then(() => {})
      .catch(() => {})
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDeskTop />
          <HomeTop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default HomePage
```

## 299 Create Contact Rest API

+ `Laravel Project`を編集<br>

## 300 Consume Contact Rest API From Client Side Part1

+ `src/components/common/Contact.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  nameOnChange = (e) => {
    let name = e.target.value
    // alert(name)
    this.setState({ name: name })
  }

  emailOnChange = (e) => {
    let email = e.target.value
    // alert(email)
    this.setState({ email: email })
  }

  messageOnChange = (e) => {
    let message = e.target.value
    // alert(message)
    this.setState({ message: message })
  }

  onFormSubmit = (e) => {
    alert("Hello hi")
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form onSubmit={this.onFormSubmit} className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US</h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us
                    </h6>
                    <input
                      onChange={this.nameOnChange}
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                    <input
                      onChange={this.emailOnChange}
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <Form.Control
                      onChange={this.messageOnChange}
                      className="form-control m-2"
                      as="textarea"
                      rows={3}
                      placeholder="Enter Message"
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br />
                  <br />
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104
                    <br />
                    Email: Support@easylearningbd.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOODi-ODpeODvOODqOODvOOCr-W3niDjg4vjg6Xjg7zjg6jjg7zjgq8!5e0!3m2!1sja!2sjp!4v1640079892734!5m2!1sja!2sjp"
                    width="550"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
```

## 301 Consume Contact Rest API From Client Side Part2

+ `src/validation`ディレクトリを作成<br>

+ `src/validation/Validation.jsx`コンポーネントを作成<br>

```
class Validation {
  static NameRegex = /^[A-Za-z\'\s\.\:\-]+$/
}

export default Validation
```

+ `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = "http://localhost/api"
  static VisitorDetails = this.BaseURL + "/getvisitor"
  static PostContact = this.BaseURL + "/postcontact"
}

export default AppURL
```

+ `src/components/common/Contact.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import Validation from '../../validation/Validation'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  nameOnChange = (e) => {
    let name = e.target.value
    // alert(name)
    this.setState({ name: name })
  }

  emailOnChange = (e) => {
    let email = e.target.value
    // alert(email)
    this.setState({ email: email })
  }

  messageOnChange = (e) => {
    let message = e.target.value
    // alert(message)
    this.setState({ message: message })
  }

  onFormSubmit = (e) => {
    let name = this.state.name
    let email = this.state.email
    let message = this.state.message

    if (message.length == 0) {
      alert('Please Write your message')
    } else if (name.length == 0) {
      alert('Please Write down your name')
    } else if (email.length == 0) {
      alert('Please Write down our Email')
    } else if (!Validation.NameRegex.test(name)) {
      alert('Invalid Name')
    } else {
      let MyFormData = new FormData()
      MyFormData.append('name', name)
      MyFormData.append('email', email)
      MyFormData.append('message', message)

      axios
        .post(AppURL.PostContact, MyFormData)
        .then((resp) => {
          if (resp.status == 200 && resp.data == 1) {
            alert('Message Send Successfully')
          } else {
            alert('error')
          }
        })
        .catch((error) => {
          alert(error)
        })
    }

    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form onSubmit={this.onFormSubmit} className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US</h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us
                    </h6>
                    <input
                      onChange={this.nameOnChange}
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                    <input
                      onChange={this.emailOnChange}
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <Form.Control
                      onChange={this.messageOnChange}
                      className="form-control m-2"
                      as="textarea"
                      rows={3}
                      placeholder="Enter Message"
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br />
                  <br />
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104
                    <br />
                    Email: Support@easylearningbd.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOODi-ODpeODvOODqOODvOOCr-W3niDjg4vjg6Xjg7zjg6jjg7zjgq8!5e0!3m2!1sja!2sjp!4v1640079892734!5m2!1sja!2sjp"
                    width="550"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
```

## 302 Consume Contact Rest API From Client Side Part3

+ `src/components/common/Contact.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import Validation from '../../validation/Validation'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  nameOnChange = (e) => {
    let name = e.target.value
    // alert(name)
    this.setState({ name: name })
  }

  emailOnChange = (e) => {
    let email = e.target.value
    // alert(email)
    this.setState({ email: email })
  }

  messageOnChange = (e) => {
    let message = e.target.value
    // alert(message)
    this.setState({ message: message })
  }

  onFormSubmit = (e) => {
    let name = this.state.name
    let email = this.state.email
    let message = this.state.message
    let sendBtn = document.getElementById('sendBtn')
    let contactForm = document.getElementById('contactForm')

    if (message.length == 0) {
      alert('Please Write your message')
    } else if (name.length == 0) {
      alert('Please Write down your name')
    } else if (email.length == 0) {
      alert('Please Write down our Email')
    } else if (!Validation.NameRegex.test(name)) {
      alert('Invalid Name')
    } else {
      sendBtn.innerHTML = 'Sending...'
      let MyFormData = new FormData()
      MyFormData.append('name', name)
      MyFormData.append('email', email)
      MyFormData.append('message', message)

      axios
        .post(AppURL.PostContact, MyFormData)
        .then((resp) => {
          if (resp.status == 200 && resp.data == 1) {
            alert('Message Send Successfully')
            sendBtn.innerHTML = 'Send'
            contactForm.reset()
          } else {
            alert('error')
            sendBtn.innerHTML = 'Send'
          }
        })
        .catch((error) => {
          alert(error)
          sendBtn.innerHTML = 'Send'
        })
    }

    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form
                    id="contactForm"
                    onSubmit={this.onFormSubmit}
                    className="onboardForm"
                  >
                    <h4 className="section-title-login">CONTACT WITH US</h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us
                    </h6>
                    <input
                      onChange={this.nameOnChange}
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                    <input
                      onChange={this.emailOnChange}
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <Form.Control
                      onChange={this.messageOnChange}
                      className="form-control m-2"
                      as="textarea"
                      rows={3}
                      placeholder="Enter Message"
                    />
                    <Button
                      id="sendBtn"
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br />
                  <br />
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104
                    <br />
                    Email: Support@easylearningbd.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOODi-ODpeODvOODqOODvOOCr-W3niDjg4vjg6Xjg7zjg6jjg7zjgq8!5e0!3m2!1sja!2sjp!4v1640079892734!5m2!1sja!2sjp"
                    width="550"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
```
