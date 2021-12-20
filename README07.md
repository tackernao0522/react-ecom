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

## 273 Nav Menu Desktop Part1

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Categories /> // 前後入れ替え
        <Collection /> // 前後入れ替え
      </Fragment>
    )
  }
}

export default HomePage
```

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Container, Navbar } from 'react-bootstrap'

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} bg="light">
            <Container>
              <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop /> // 追記
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
      </Fragment>
    )
  }
}

export default HomePage
```

+ `src/assets/css/navMenuDesktop.css`を編集<br>

```
.nav-logo {
  width: 180px;
  height: 40px;
}
.cart-btn {
  padding: 5px 15px 5px 15px;
  color: #fafdfb;
  border-radius: 20px !important;
  border: 0.5px solid #051b35;
  background: #051b35 !important;
}
.navbar {
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  background-color: #ffffff !important;
  box-shadow: 0 0 8px 0 rgba(57, 78, 234, 0.1);
}

.TopSectionDown {
  margin-bottom: 80px;
}
```

+ `src/assets/images`ディレクトリに`easyshop.png`を入れておく<br>

+ `src/components/common/NavMenuDesktop.jsc`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} className='navbar' bg="light">
            <Container fluid={"true"}>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/"><img className='nav-logo' src={Logo} /></Link>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>

                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>

                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
```