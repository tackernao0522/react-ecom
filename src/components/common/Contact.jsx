import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

    if (message.length === 0) {
      toast.error('Please Write your message')
    } else if (name.length === 0) {
      toast.error('Please Write down your name')
    } else if (email.length === 0) {
      toast.error('Please Write down our Email')
    } else if (!Validation.NameRegex.test(name)) {
      toast.error('Invalid Name')
    } else {
      sendBtn.innerHTML = 'Sending...'
      let MyFormData = new FormData()
      MyFormData.append('name', name)
      MyFormData.append('email', email)
      MyFormData.append('message', message)

      axios
        .post(AppURL.PostContact, MyFormData)
        .then((resp) => {
          if (resp.status === 200 && resp.data === 1) {
            toast.success('Message Send Successfully')
            sendBtn.innerHTML = 'Send'
            contactForm.reset()
          } else {
            toast.error('error')
            sendBtn.innerHTML = 'Send'
          }
        })
        .catch((error) => {
          toast.error(error)
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
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Contact
