## 272 Home Big Slider

+ `src/components/home/Slider.jsx`を`HomeSlider.jsx`にリネーム<br>

+ `src/components/home/HomeTop.jsx`を修正<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu />
            </Col>
            <Col lg={9} md={9} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
```

+ `src/assets/css/bigSlider.css`を編集<br>

```
.slick-dots {
  top: 90%;
}
.slider-img {
  width: 100% !important;
  height: 380px;
}

.slick-slide {
  height: auto !important;
}
```

+ `src/assets/image`ディレクトリにHomeSliderイメージを入れる<br>

+ `src/components/home/HomeSlider.jsx`を編集<br>

```
import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Slider1 from '../../assets/images/slider1.jpg'
import Slider2 from '../../assets/images/slider2.jpg'
import Slider3 from '../../assets/images/slider3.jpg'

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
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slider-img" src={Slider1} />
          </div>
          <div>
            <img className="slider-img" src={Slider2} />
          </div>
          <div>
            <img className="slider-img" src={Slider3} />
          </div>
        </Slider>
      </div>
    )
  }
}

export default HomeSlider
```