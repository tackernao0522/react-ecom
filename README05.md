## 267 Collection Product Component

+ `src/components/home/Collection.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> PRODUCT COLLECTION</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Striped Men Hooded Neck Red
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Striped Men Round Neck Maroon, Grey
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/jt4olu80/t-shirt/v/7/v/xl-t-shirt-0068-eg-original-imafejrfpzjkxvkq.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Color Block Men Round Neck Grey
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kljrvrk0/t-shirt/q/r/0/l-trdhdful-d32-tripr-original-imagynnpg2fh62ht.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kfmv9u80/t-shirt/t/f/p/l-bmrnvhenful-z14-blive-original-imafwfqkyfr3zxdr.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/d/2/e/l-bnvgyrnful-z12-blive-original-imafvgzk3mh2vpmt.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kdnf98w0hlty2aw-0/t-shirt/r/5/v/l-tgy-rbvnd01ganesh-tripr-original-imafuzrq6hpafsmb.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/jwxuvm80/t-shirt/c/n/g/s-1jgrfdotstpwh-nvy-jugular-original-imafhhajsn6yzg2a.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collection
```

+ `src/pages/HomePages.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <Collection />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage
```

## 268 New Arrival Slick Carousel Part1

+ `src/components/home/NewArrival.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class NewArrival extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>NEW ARRIVAL</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Slider {...settings}>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/jeka07k0/watch/4/p/y/38024pp25-fastrack-original-imaf37n5df3bn52n.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/kka1si80/watch/4/t/k/tw-02524-teenager-luxurious-fashion-silicone-black-colored-led-original-imafznht7bzfmj7d.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/jw0zr0w0/watch/c/u/r/ls2811-limestone-original-imafgrxqf8qvecjd.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/k48rwcw0/watch/k/v/f/lcs-8190-lois-caron-original-imafn7fsyttnpybp.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/ke353m80-0/watch/e/b/s/fresh-new-arrival-latest-men-watch-watches-men-ghadi-gents-boys-original-imafuupqgaanhtxu.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArrival
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage
```

## 268 New Arrival Slick Carousel Part2

+ `src/assets/css/button.css`を編集<br>

```
.btn {
  border: none !important;
  border-radius: 0px !important;
}
.btn:focus {
  box-shadow: none;
}
.site-btn {
  font-weight: 300;
  padding: 5px;
  font-family: 'Roboto Condensed', sans-serif;
  color: white !important;
  background: #051b35 !important;
}

.site-btn:active {
  background: #051b35 !important;
}

.pure-material-button-contained {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-family: var(
    --pure-material-font,
    'Roboto',
    'Segoe UI',
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.pure-material-button-contained::-moz-focus-inner {
  border: none;
}

/* Overlay */
.pure-material-button-contained::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  opacity: 0;
  transition: opacity 0.2s;
}

/* Ripple */
.pure-material-button-contained::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  padding: 50%;
  width: 32px; /* Safari */
  height: 32px; /* Safari */
  background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 1s, transform 0.5s;
}

/* Hover, Focus */
.pure-material-button-contained:hover,
.pure-material-button-contained:focus {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.pure-material-button-contained:focus::before {
  opacity: 0.24;
}

.pure-material-button-contained:hover:focus::before {
  opacity: 0.3;
}

/* Active */
.pure-material-button-contained:active {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.pure-material-button-contained:active::after {
  opacity: 0.32;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0s;
}
```

+ `src/components/home/NewArrival.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class NewArrival extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              NEW ARRIVAL &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/jeka07k0/watch/4/p/y/38024pp25-fastrack-original-imaf37n5df3bn52n.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/kka1si80/watch/4/t/k/tw-02524-teenager-luxurious-fashion-silicone-black-colored-led-original-imafznht7bzfmj7d.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/jw0zr0w0/watch/c/u/r/ls2811-limestone-original-imafgrxqf8qvecjd.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/k48rwcw0/watch/k/v/f/lcs-8190-lois-caron-original-imafn7fsyttnpybp.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/800/960/ke353m80-0/watch/e/b/s/fresh-new-arrival-latest-men-watch-watches-men-ghadi-gents-boys-original-imafuupqgaanhtxu.jpeg?q=50"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Realme C21 (Cross Black, 64 GB)
                    </p>
                    <p className="product-price-on-card">Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArrival
```