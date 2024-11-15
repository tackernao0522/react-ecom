import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class Refund extends Component {
  constructor() {
    super()
    this.state = {
      refund: '',
      loaderDiv: '',
      mainDiv: 'd-done',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((resp) => {
        let StatusCode = resp.status
        if (StatusCode == 200) {
          let JsonData = resp.data[0].refund
          this.setState({ refund: JsonData, loaderDiv: 'd-none', mainDiv: '' })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/refund">Refund</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Refund Page</h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.refund)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Refund
