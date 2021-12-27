# Section30: Create and Counsume Product List Rest API

## 319 Create Product List API Part1

+ `Laravel Project`を編集<br>

## 321 Consume Product List API Part1

+ `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = 'http://localhost/api'
  static VisitorDetails = this.BaseURL + '/getvisitor'
  static AllSiteInfo = this.BaseURL + '/allsiteinfo'
  static AllCategoryDetails = this.BaseURL + '/allcategory'
  static ProductListByRemark(remark) {
    return this.BaseURL + '/productlistbyremark/' + remark
  }
  static ProductListByCategory(category) {
    return this.BaseURL + '/productlistbycategory/' + category
  }
  static Productlistbysubcategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    )
  }
}

export default AppURL
```

+ `src/components/home/FeaturedProducts.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class FeaturedProducts extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('FEATURED'))
      .then((resp) => {
        console.log(resp)
        this.setState({ ProductData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const FeaturedList = this.state.ProductData
    // console.log(FeaturedList)
    const MyView = FeaturedList.map((FeaturedList, i) => {
      if (FeaturedList.special_price == 'na') {
        return (
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
            <Link to="/productdetails">
              <Card className="image-box card">
                <img className="center" src={FeaturedList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{FeaturedList.title}</p>
                  <p className="product-price-on-card">
                    Price : ${FeaturedList.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        )
      } else {
        return (
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
            <Link to="/productdetails">
              <Card className="image-box card">
                <img className="center" src={FeaturedList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{FeaturedList.title}</p>
                  <p className="product-price-on-card">
                    {`Price : `}
                    <strike className="text-secondary">
                      ${`${FeaturedList.price} `}
                    </strike>
                    ${FeaturedList.special_price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        )
      }
    })

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
```
