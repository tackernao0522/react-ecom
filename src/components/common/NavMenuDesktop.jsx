import React, { Component, Fragment } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} className='navbar' bg="light">
            <Container fluid={"true"}>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/"><img className='nav-logo' src={Logo} /></Link>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                  
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
