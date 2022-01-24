import React, { Component, Fragment } from 'react'
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Taka from '../../assets/images/profile_image.jpg'

class Profile extends Component {
  render() {
    let name
    let email

    if (this.props.user) {
      name = this.props.user.name
      email = this.props.user.email
    }

    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    }

    return (
      <Fragment>
        <div className="section-title text-center mb-55">
          <h2>User Profile Page</h2>
        </div>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Taka} className="userprofile" />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Link className="text-link" to="/orderlist">
                      <p className="product-name-on-card">Order List</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link className="text-link" to="/orderlist">
                      <p className="product-name-on-card">Order List</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link className="text-link" to="/orderlist">
                      <p className="product-name-on-card">Order List</p>
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>

            <Col lg={8} md={8} sm={12}>
              <ul className="list-group">
                <li className="list-group-item">Name : {name}</li>
                <li className="list-group-item">Email : {email}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Profile
