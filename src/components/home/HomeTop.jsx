import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import SliderLoading from '../placeholder/SliderLoading'
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
  constructor() {
    super()
    this.state = {
      MenuData: [],
      SliderData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((resp) => {
        this.setState({ MenuData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })

    axios
      .get(AppURL.AllSlider)
      .then((resp) => {
        this.setState({
          SliderData: resp.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <SliderLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
              <Col lg={3} md={3} sm={12}>
                <MegaMenu data={this.state.MenuData} />
              </Col>
              <Col lg={9} md={9} sm={12}>
                <HomeSlider data={this.state.SliderData} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default HomeTop
