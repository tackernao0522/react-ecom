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

