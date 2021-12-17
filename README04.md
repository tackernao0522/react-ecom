# Section21 Design Home Page

## 264 Featured Product Component Part1

+ `src/assets/css/card.css`を編集<br>

```
.card {
  width: 100% !important;
  text-decoration: none;
  border: none !important;
  border-radius: 0% !important;
  box-shadow: 0 0 4px 0 rgba(57, 78, 234, 0.1);
}
.card:hover {
  border-radius: 0% !important;
  text-decoration: none;
  box-shadow: 0 0 12px 0 rgba(57, 78, 234, 0.1);
}

.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100% !important;
}
.image-box img {
  width: 150px !important;
  transition: all 0.3s;
  display: block;
  height: 250px !important;
  transform: scale(1);
}
.image-box:hover img {
  transform: scale(1.1);
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.section-title h2 {
  font-size: 30px;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin: 0;
}

.section-title h2:before {
  position: absolute;
  top: 17px;
  left: -100px;
  width: 80px;
  height: 2px;
  content: '';
  background-color: #000;
}

.section-title h2:after {
  position: absolute;
  top: 17px;
  right: -100px;
  width: 80px;
  height: 2px;
  content: '';
  background-color: #000;
}
```

+ `src/components/home/FeaturedProducts.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>FEATURED PRODUCT</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
      </Fragment>
    )
  }
}

export default HomePage
```

+ `src/assets/css/custorm.css`を編集<br>

```
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto+Condensed:ital,wght@0,400;0,700;1,300&display=swap');

@import 'bigSlider.css';
@import 'button.css';
@import 'card.css';
@import 'footer.css';
@import 'megaMenu.css';
@import 'navMenuDesktop.css';
@import 'navMenuMobile.css';
@import 'typo.css';

body {
  background-color: #ffffff;
}
```

+ `src/assets/css/typo.css`を編集<br>

```
.section-title {
  margin-top: 50px;
  margin-bottom: 50px;
  color: #051b35;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.section-sub-title {
  color: #212121;
  font-size: 15px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
}
.product-name-on-card {
  color: #051b35;
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.product-price-on-card {
  color: #e43023;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
}
.category-name {
  color: #000000;
  font-size: 13px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
}
```

## 265 Featured Product Component Part2

+ `src/components/home/featuredProducts.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Realme C21 (Cross Black, 64 GB)
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/k/o/m/c21y-rmx3261-realme-original-imag65kcytrk8dtr.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Realme C21Y (Cross Blue, 32 GB)
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Realme C21 (Cross Blue, 32 GB)
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/v/l/u/hot-10-play-x688b-infinix-original-imag29hfaedkgdfe.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Infinix Hot 10 Play (Morandi Green, 64 GB)
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Realme 8 5G (Supersonic Black, 64 GB)
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://rukminim1.flixcart.com/image/416/416/kd69z0w0/mobile/s/h/p/mi-redmi-note-9-b086982zkf-original-imafu4qfyyyrg8er.jpeg?q=70"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    REDMI Note 9 (Arctic White, 64 GB)
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

export default FeaturedProducts
```

## 266 Categories Component

+ `src/components/home/Categories.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                      />
                      <h5 className="category-name">Top Offers</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                      />
                      <h5 className="category-name">Grocery</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                      />
                      <h5 className="category-name">Mobiles</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                      />
                      <h5 className="category-name">Fashion</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                      />
                      <h5 className="category-name">Electronics</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                      />
                      <h5 className="category-name">Home</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                      />
                      <h5 className="category-name">Appliances</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                      />
                      <h5 className="category-name">Beauty</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                      />
                      <h5 className="category-name">Top Offers</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                      />
                      <h5 className="category-name">Grocery</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                      />
                      <h5 className="category-name">Mobiles</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                      />
                      <h5 className="category-name">Fashion</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                      />
                      <h5 className="category-name">Electronics</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                      />
                      <h5 className="category-name">Home</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                      />
                      <h5 className="category-name">Appliances</h5>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                      />
                      <h5 className="category-name">Beauty</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage
```
