import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import FeaturedLoading from '../placeholder/FeaturedLoading'

class FeaturedProducts extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('FEATURED'))
      .then((resp) => {
        this.setState({
          ProductData: resp.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const FeaturedList = this.state.ProductData
    const MyView = FeaturedList.map((FeaturedList, i) => (
      <Col
        key={i.toString()}
        className="p-1"
        key={1}
        xl={2}
        lg={2}
        md={2}
        sm={4}
        xs={6}
      >
        <Link className='text-link' to={`/productdetails/${FeaturedList.id}`}>
          <Card className="image-box card">
            <img className="center" src={FeaturedList.image} />
            <Card.Body>
              <p className="product-name-on-card">{FeaturedList.title}</p>
              {FeaturedList.special_price == 'na' ? (
                <p className="product-price-on-card">
                  Price : ${FeaturedList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  {`Price : `}
                  <strike className="text-secondary">
                    ${`${FeaturedList.price} `}
                  </strike>
                  ${FeaturedList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))

    return (
      <Fragment>
        <FeaturedLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>FEATURED PRODUCT</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FeaturedProducts
