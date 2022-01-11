import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class SuggestedProduct extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
    }
  }

  componentDidMount() {
    let subcategory = this.props.subcategory

    axios
      .get(AppURL.SimilarProduct(subcategory))
      .then((resp) => {
        this.setState({ ProductData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const MyList = this.state.ProductData
    const MyView = MyList.map((ProductList, i) => (
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
        <Link className="text-link" to={`/productdetails/${ProductList.id}`}>
          <Card className="image-box card">
            <img className="center" src={ProductList.image} />
            <Card.Body>
              <p className="product-name-on-card">{ProductList.title}</p>
              {ProductList.special_price == 'na' ? (
                <p className="product-price-on-card">
                  Price : ${ProductList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  {`Price : `}
                  <strike className="text-secondary">
                    ${`${ProductList.price} `}
                  </strike>
                  ${ProductList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>YOU MAY ALSO LIKE</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          {MyList.length > 0 ? (
            <Row>{MyView}</Row>
          ) : (
            <p>There have no similar product</p>
          )}
        </Container>
      </Fragment>
    )
  }
}

export default SuggestedProduct
