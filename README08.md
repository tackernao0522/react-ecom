## 275 Mobile View Menu Part1

+ `src/components/common/NavMenuMobile.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
            <Container
              fluid={'true'}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Button>
                </Col>
              </Row>
            </Container>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuMobile />
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

+ `src/assets/css/navMenuMobile.css`を編集<br>

```
.sideNavOpen {
  height: 100%;
  width: 240px;
  margin-top: 55px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  overflow-x: hidden;
  font-size: 16px;
  padding-top: 40px;
  transition: 0.1s;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(57, 78, 234, 0.1);
}
.sideNavClose {
  height: 100%;
  width: 0px;
  position: fixed;
  top: 0;
  font-size: 20px;
  left: 0;
  z-index: 10;
  overflow-x: hidden;
  transition: 0.1s;
  background-color: #161616;
  box-shadow: 0 0 8px 0 rgba(57, 78, 234, 0.1);
}
.ContentOverlayOpen {
  display: block;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 7;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}
.ContentOverlayClose {
  display: none;
}
```

+ `src/components/common/NavMenuMobile.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container
            fluid={'true'}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button className="btn">
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  <img className="nav-logo" src={Logo} />
                </Link>
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Button>
              </Col>
            </Row>
          </Container>
          <div className="sideNavOpen">
            <hr className='w-80' />
            <div className="list-group">
              <a className="list-group-item nav-font nav-itemmenu list-group-item-action"><i className='fa mr-2 fa-home'></i>Home</a>
            </div>
          </div>
          <div className="ContentOverlayOpen"></div>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
```

## 276 Mobile View Menu Part2

+ `src/components/common/NavMenuMobile.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuMobile extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose()
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose()
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState
    let ContentOverState = this.state.ContentOverState
    if (SideNavState === 'sideNavOpen') {
      this.setState({
        SideNavState: 'sideNavClose',
        ContentOverState: 'ContentOverlayClose',
      })
    } else {
      this.setState({
        SideNavState: 'sideNavOpen',
        ContentOverState: 'ContentOverlayOpen',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container
            fluid={'true'}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button onClick={this.MenuBarClickHandler} className="btn">
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  <img className="nav-logo" src={Logo} />
                </Link>
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Button>
              </Col>
            </Row>
          </Container>
          <div className={this.state.SideNavState}>ここにメニューが入る</div>
          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
```

## 277 Mobile View Menu Part3

+ `src/components/home/MegaMenuMobile.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class MegaMenuMobile extends Component {
  constructor() {
    super()
    this.MegaMenu = this.MegaMenu.bind(this)
  }

  componentDidMount() {
    this.MegaMenu()
  }

  MegaMenu() {
    var acc = document.getElementsByClassName('accordionMobile')
    var accNum = acc.length
    var i
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }

  render() {
    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MegaMenuMobile
```

+ `src/assets/css/megaMenuMobile.css`ファイルを作成<br>

```
.accordionMobile {
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
.accordionMobile:hover {
  color: #ffffff;
  font-weight: 400;
  background-color: #051b35;
}
.accordionMobile:after {
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
.panelMobile {
  padding: 0 10px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.accordionMenuDivMobile {
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

.accordionMenuDivMobile::-webkit-scrollbar {
  width: 10px !important;
}

.accordionMenuDivMobile::-webkit-scrollbar-thumb {
  background: #dedede !important;
}

.accordionMenuDivMobile::-webkit-scrollbar-thumb:hover {
  background: #808080 !important;
}

.accordionMenuDivMobile::-webkit-scrollbar-track {
  background: #f4f4f4 !important;
}

.accordionMenuDivInsideMobile {
  direction: ltr;
}
.accordionMenuIconMobile {
  width: 20px;
  height: auto;
}
.accordionItemMobile {
  color: #444;
  text-decoration: none;
}
.accordionItemMobile:hover {
  text-decoration: none;
}
```

+ `src/assets/css/custom.css`を編集<br>

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
@import 'megaMenuMobile.css'; // 追記

body {
  background-color: #ffffff;
}
```

+ `src/components/common/NavMenuMobile.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import MegaMenuMobile from '../home/MegaMenuMobile'

class NavMenuMobile extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose()
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose()
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState
    let ContentOverState = this.state.ContentOverState
    if (SideNavState === 'sideNavOpen') {
      this.setState({
        SideNavState: 'sideNavClose',
        ContentOverState: 'ContentOverlayClose',
      })
    } else {
      this.setState({
        SideNavState: 'sideNavOpen',
        ContentOverState: 'ContentOverlayOpen',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container
            fluid={'true'}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button onClick={this.MenuBarClickHandler} className="btn">
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  <img className="nav-logo" src={Logo} />
                </Link>
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Button>
              </Col>
            </Row>
          </Container>
          <div className={this.state.SideNavState}><MegaMenuMobile /></div> // 編集
          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
```

## 278 Mobile View Menu Part4

+ `src/components/home/HomeTopMobile.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeSlider from './HomeSlider'

class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row className="p-0 m-0 overflow-hidden">
            <Col lg={12} md={12} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTopMobile
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import NavMenuDeskTop from '../components/common/NavMenuDesktop'
import HomeTopMobile from '../components/home/HomeTopMobile'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDeskTop />
          <HomeTop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
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

+ `src/assets/css/responsive.css`ファイルを作成<br>


```
@media (max-width: 374.98px) {
  .Mobile {
  }
  .Desktop {
    display: none;
  }
}

@media (min-width: 375.98px) and (max-width: 575.98px) {
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

+ `src/assets/css/custom.css`を編集<br>

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
@import 'megaMenuMobile.css';
@import 'responsive.css'; // 追記

body {
  background-color: #ffffff;
}
```

## 279 Mobile View Menu Part5

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose()
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose()
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState
    let ContentOverState = this.state.ContentOverState
    if (SideNavState === 'sideNavOpen') {
      this.setState({
        SideNavState: 'sideNavClose',
        ContentOverState: 'ContentOverlayClose',
      })
    } else {
      this.setState({
        SideNavState: 'sideNavOpen',
        ContentOverState: 'ContentOverlayOpen',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} className="navbar" bg="light">
            <Container
              fluid={'true'}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Button onClick={this.MenuBarClickHandler} className="btn">
                    <i className="fa fa-bars"></i>
                  </Button>
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input type="text" className="form-control" />
                    <Button type="button" className="btn site-btn">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/" className="h4 btn">
                    LOGIN
                  </Link>
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuMobile />
        </div>
        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
```

+ `src/components/home/MegaMenuAll.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class MegaMenuAll extends Component {
  constructor() {
    super()
    this.MegaMenu = this.MegaMenu.bind(this)
  }

  componentDidMount() {
    this.MegaMenu()
  }

  MegaMenu() {
    var acc = document.getElementsByClassName('accordionAll')
    var accNum = acc.length
    var i
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }

  render() {
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MegaMenuAll
```

+ `src/assets/css/megaMenuAll.css`ファイルを作成<br>

```
.accordionAll {
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
.accordionAll:hover {
  color: #ffffff;
  font-weight: 400;
  background-color: #051b35;
}
.accordionAll:after {
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
.panelAll {
  padding: 0 10px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.accordionMenuDivAll {
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

.accordionMenuDivAll::-webkit-scrollbar {
  width: 10px !important;
}

.accordionMenuDivAll::-webkit-scrollbar-thumb {
  background: #dedede !important;
}

.accordionMenuDivAll::-webkit-scrollbar-thumb:hover {
  background: #808080 !important;
}

.accordionMenuDivAll::-webkit-scrollbar-track {
  background: #f4f4f4 !important;
}

.accordionMenuDivInsideAll {
  direction: ltr;
}
.accordionMenuIconAll {
  width: 20px;
  height: auto;
}
.accordionItemAll {
  color: #444;
  text-decoration: none;
}
.accordionItemAll:hover {
  text-decoration: none;
}
```

+ `src/assets/css/custom.css`を編集<br>

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
@import 'megaMenuMobile.css';
@import 'responsive.css';
@import 'megaMenuAll.css'; // 追記

body {
  background-color: #ffffff;
}
```

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose()
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose()
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState
    let ContentOverState = this.state.ContentOverState
    if (SideNavState === 'sideNavOpen') {
      this.setState({
        SideNavState: 'sideNavClose',
        ContentOverState: 'ContentOverlayClose',
      })
    } else {
      this.setState({
        SideNavState: 'sideNavOpen',
        ContentOverState: 'ContentOverlayOpen',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} className="navbar" bg="light">
            <Container
              fluid={'true'}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Button onClick={this.MenuBarClickHandler} className="btn">
                    <i className="fa fa-bars"></i>
                  </Button>
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input type="text" className="form-control" />
                    <Button type="button" className="btn site-btn">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/" className="h4 btn">
                    LOGIN
                  </Link>
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll /> // 編集
        </div>
        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
```
