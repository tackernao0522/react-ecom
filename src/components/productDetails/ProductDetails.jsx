import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ProductDetials extends Component {
  render() {
    let ProductAllData = this.props.data
    let title = ProductAllData.productList[0].title
    let brand = ProductAllData.productList[0].brand
    let category = ProductAllData.productList[0].category
    let subcategory = ProductAllData.productList[0].subcategory
    let image = ProductAllData.productList[0].image
    let price = ProductAllData.productList[0].price
    let specialPrice = ProductAllData.productList[0].special_price
    let productCode = ProductAllData.productList[0].product_code
    let remark = ProductAllData.productList[0].remark
    let star = ProductAllData.productList[0].star

    let imageAne = ProductAllData.productDetails[0].image_one
    let imageTwo = ProductAllData.productDetails[0].image_two
    let imageThree = ProductAllData.productDetails[0].image_three
    let imageFour = ProductAllData.productDetails[0].image_four
    let color = ProductAllData.productDetails[0].color
    let size = ProductAllData.productDetails[0].size
    let productId = ProductAllData.productDetails[0].product_id
    let shortDescription = ProductAllData.productDetails[0].short_description
    let longDescription = ProductAllData.productDetails[0].long_description

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <img className="w-100" src={imageAne} />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageAne} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageTwo} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageThree} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageFour} />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{shortDescription}</h6>
                  <div className="input-group">
                    <div className="Product-price-card d-inline ">
                      Reguler Price ${price}
                    </div>
                    <div className="Product-price-card d-inline ">
                      50% Discount
                    </div>
                    <div className="Product-price-card d-inline ">
                      New Price ${specialPrice}
                    </div>
                  </div>
                  <h6 className="mt-2">Category : <b>{category}</b></h6>

                  <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>

                  <h6 className="mt-2">Brand : <b>{brand}</b></h6>

                  <h6 className="mt-2">Product Code : <b>{productCode}</b></h6>

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {' '}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {' '}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {' '}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>{longDescription}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProductDetials
