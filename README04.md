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
