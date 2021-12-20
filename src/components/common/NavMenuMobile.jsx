import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container
            fluid={'true'}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button className="btn">
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  <img className="nav-logo" src={Logo} />
                </Link>
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Button>
              </Col>
            </Row>
          </Container>
          <div className="sideNavOpen">
            <hr className='w-80' />
            <div className="list-group">
              <a className="list-group-item nav-font nav-itemmenu list-group-item-action"><i className='fa mr-2 fa-home'></i>Home</a>
            </div>
          </div>
          <div className="ContentOverlayOpen"></div>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
