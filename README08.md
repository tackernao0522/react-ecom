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
