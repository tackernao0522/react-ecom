# Section22: Design Menu Component

## 270 Accordion Menu Component Part1

+ `src/components/home/HomeTop.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import Slider from './Slider'

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
              <Slider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
```

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
        <Collection />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage
```

+ `src/components/home/MegaMenu.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {
  render() {
    return (
      <Fragment>
        <h1>Mega Menu</h1>
      </Fragment>
    )
  }
}

export default MegaMenu
```

+ `src/components/home/Slider.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'

class Slider extends Component {
  render() {
    return (
      <Fragment>
        <h1>Slider</h1>
      </Fragment>
    )
  }
}

export default Slider
```

+ `src/assets/css/megaMenu.css`を編集<br>

```
.accordion {
  background-color: #f8f8f8;
  color: #444;
  cursor: pointer;
  padding: 7px;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  text-align: left;
  outline: none;
  font-weight: 600;
  font-family: 'Roboto Condensed', sans-serif;
  transition: 0.4s;
  overflow: paged-y;
  box-shadow: 0 0 2px 0 rgba(57, 78, 234, 0.1);
}
.active,
.accordion:hover {
  color: #ffffff;
  font-weight: 400;
  background-color: #051b35;
}
.accordion:after {
  content: '\276F';
  color: #c2c2c2;
  float: right;
  margin-left: 5px;
}
.active:after,
hover {
  color: #ffffff;
  content: '\276E';
}
.panel {
  padding: 0 10px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.accordionMenuDiv {
  width: 100%;
  direction: rtl;
  font-family: 'Roboto Condensed', sans-serif !important;
  font-weight: 300 !important;
  height: 380px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #e9e9e9 #ffffff;
}

.accordionMenuDiv::-webkit-scrollbar {
  width: 10px !important;
}

.accordionMenuDiv::-webkit-scrollbar-thumb {
  background: #dedede !important;
}

.accordionMenuDiv::-webkit-scrollbar-thumb:hover {
  background: #808080 !important;
}

.accordionMenuDiv::-webkit-scrollbar-track {
  background: #f4f4f4 !important;
}

.accordionMenuDivInside {
  direction: ltr;
}
.accordionMenuIcon {
  width: 20px;
  height: auto;
}
.accordionItem {
  color: #444;
  text-decoration: none;
}
.accordionItem:hover {
  text-decoration: none;
}
```

+ `src/components/home/MegaMenu.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {
  render() {
    return (
      <div className="accordionMenuDiv">
        <div className='accordionMenuDivInside'>
          <button className='accordion'>
            <img className='accordionMenuIcon' src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
          </button>
            <div className="panel">
              <ul>
                <li><a href="#" className='accordionItem'>Mans Tshirt 1</a></li>
                <li><a href="#" className='accordionItem'>Mans Tshirt 2</a></li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default MegaMenu
```
