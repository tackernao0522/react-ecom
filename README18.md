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