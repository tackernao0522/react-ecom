# Section31: Create and Consume Home Slider Rest API

## 328 Create API For Home Slider

+ `Laravel Project`を編集<br>

## 329 Consume API For Home Slider

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
  static ProductlistBySubcategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    )
  }
  static AllSlider = this.BaseURL + '/allslider'
}

export default AppURL
```

+ `src/components/home/HomeTop.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
  constructor() {
    super()
    this.state = {
      MenuData: [],
      SliderData: [],
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
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.MenuData} />
            </Col>
            <Col lg={9} md={9} sm={12}>
              <HomeSlider data={this.state.SliderData} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
```

+ `src/components/home/HomeSlider.jsx`を編集<br>

```
import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    const SliderData = this.props.data;
    const MyView = SliderData.map((SliderList, i) => (
      <div key={i.toString()}>
        <img className="slider-img" src={SliderList.slider_image} />
      </div>
    ))

    return (
      <div>
        <Slider {...settings}>
          {MyView}
        </Slider>
      </div>
    )
  }
}

export default HomeSlider
```

+ `src/components/home/HomeTopMobile.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import HomeSlider from './HomeSlider'

class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row className="p-0 m-0 overflow-hidden">
            <Col lg={12} md={12} sm={12}>
              {/* <HomeSlider /> */} // コメントアウトしておく
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTopMobile
```

## 330 Consume API For Home Slider for Mobile

+ `src/components/home/HomeTopMobile.jsx`を編集<br>

```
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
```

+ `src/assets/css/responsive.css`を編集<br>

```
@media (max-width: 374.98px) {
  .slider-img {
    width: 100% !important;
    height: 226px;
  }

  .Mobile {
  }
  .Desktop {
    display: none;
  }
}

@media (min-width: 375.98px) and (max-width: 575.98px) {
  .slider-img {
    width: 100% !important;
    height: 226px;
  }

  .Mobile {
  }
  .Desktop {
    display: none;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .Mobile {
  }
  .Desktop {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .Mobile {
    display: none;
  }
  .Desktop {
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .Mobile {
    display: none;
  }
  .Desktop {
  }
}

@media (min-width: 1200px) {
  .Mobile {
    display: none;
  }
  .Desktop {
  }
}
```

# Section32 Managing Loader Placeholder

## 331 Managing Loader Placeholder Part1

+ `src/components/placeholder`ディレクトリを作成<br>

+ `src/components/placeholder/SliderLoading.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class SliderLoading extends Component {
  render() {
    let isLoading = this.props.isLoading

    return (
      <div className={isLoading}>
        <div className="row">
          <div className="col-3">
            <div class="ph-row">
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
              <div class="ph-col-12"></div>
            </div>
          </div>
          <div className="col-9">
            <div className="ph-picture"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SliderLoading
```

+ `src/components/home/HomeTop.jsx`を編集<br>

```
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
```

## 332 Managing Loader Placeholder Part2

+ `src/components/placeholder/FeaturedLoading.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class FeaturedLoading extends Component {
  render() {
    let isLoading = this.props.isLoading

    return (
      <div className={isLoading}>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100  w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100  w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100  w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100  w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100  w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100  w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default FeaturedLoading
```

+ `src/components/home/FeaturedProducts.jsx`を編集<br>

```
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
        <Link to="/productdetails">
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
```
