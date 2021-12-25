import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import AppURL from '../../api/AppURL'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Purchase extends Component {
  constructor() {
    super()
    this.state = {
      purchase: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    let SiteInfoPurchase = sessionStorage.getItem('AllSiteInfo')

    if (SiteInfoPurchase == null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((resp) => {
          let StatusCode = resp.status
          if (StatusCode == 200) {
            let JsonData = resp.data[0]['parchase_guide']
            this.setState({
              purchase: JsonData,
              loaderDiv: 'd-none',
              mainDiv: '',
            })

            sessionStorage.setItem('SiteInfoPurchase', JsonData)
          } else {
            toast.error('Something Went Wrong', {
              position: 'bottom-center',
            })
          }
        })
        .catch((error) => {
          toast.error('Something Went Wrong', {
            position: 'bottom-center',
          })
        })
    } else {
      this.setState({
        purchase: SiteInfoPurchase,
        loaderDiv: 'd-none',
        mainDiv: '',
      })
    }
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
                <h4 className="section-title-login">Purchase Page </h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.purchase)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Purchase
