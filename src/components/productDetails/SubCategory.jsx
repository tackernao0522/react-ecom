import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class SubCategory extends Component {
  render() {
    const MyList = this.props.ProductData
    const Category = this.props.Category
    const SubCategory = this.props.SubCategory
    const MyView = MyList.map((ProductList, i) => (
      <Col
        key={i.toString()}
        className="p-0"
        xl={3}
        lg={3}
        md={3}
        sm={6}
        xs={6}
      >
        <Card className="image-box card w-100">
          <img className="center w-75" src={ProductList.image} />
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
      </Col>
    ))

    return (
      <Fragment>
        <Container className="text-center">
          <div className="section-title text-center mb-55">
            <h2>{Category} / {SubCategory}</h2>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default SubCategory
