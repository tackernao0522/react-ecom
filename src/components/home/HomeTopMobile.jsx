import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import HomeSlider from './HomeSlider'

class HomeTopMobile extends Component {
  constructor() {
    super()
    this.state = {
      SliderData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSlider)
      .then((resp) => {
        this.setState({ SliderData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row className="p-0 m-0 overflow-hidden">
            <Col lg={12} md={12} sm={12}>
              <HomeSlider data={this.state.SliderData} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTopMobile
