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
      parchase: '',
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
            this.setState({ parchase: JsonData })

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
      this.setState({ purchase: SiteInfoPurchase })
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
              {ReactHtmlParser(this.state.parchase)}
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Purchase
