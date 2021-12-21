## 284 User Login Register Component

+ `src/pages/UserLoginPage.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'

class UserLoginPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserLogin />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default UserLoginPage
```

+ `src/components/common/UserLogin.jsx`コンポーネントを作成<br>

+ `src/route/AppRoute.js`ファイルを編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage' // 追記

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} /> // 修正
          <Route exact path="/login" component={UserLoginPage} /> // 追記
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
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
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">3</span>
                    </sup>
                  </Link>
                  <Link to="/" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/login" className="h4 btn"> // 編集
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
          <MegaMenuAll />
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

+ `src/assets/css/onboard.css`ファイルを作成<br>

```
.onboardBanner {
  width: 100% !important;
  height: auto;
  object-fit: cover;
}
.onboardForm {
  margin-top: 70px;
  margin-bottom: 70px;
  width: 90%;
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
@import 'megaMenuAll.css';
@import 'onboard.css'; // 追記

body {
  background-color: #ffffff;
}
```

+ `src/assets/css/button.css`を編集<br>

```
.btn {
  border: none !important;
  border-radius: 0px !important;
}
.btn:focus {
  box-shadow: none;
}

.site-btn-login { // 追記
  font-weight: 300;
  padding: 5px;
  width: 100%;
  font-family: 'Roboto Condensed', sans-serif;
  color: white !important;
  background: #051b35 !important;
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

+ `src/assets/images/`ディレクトリに`login.png`を入れておく<br>

+ `src/assets/css/common.css`ファイルを作成<br>

```
html {
  height: auto !important;
}
body {
  background-color: #fafdfb !important;
  font-size: 15px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  color: #212121;
  position: initial !important;
  min-height: initial !important;
  top: auto !important;
}

.goog-te-banner-frame {
  top: initial;
  bottom: 0;
  display: none;
}

.BetweenTwoSection {
  margin-top: 60px;
  margin-bottom: 60px;
}

.TopSection {
  margin-top: 100px;
}

.Link {
  text-decoration: none !important;
}

.Link:hover {
  text-decoration: none !important;
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
@import 'megaMenuAll.css';
@import 'onboard.css';
@import 'common.css'; // 追記

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
.section-title-login { // 追記
  margin-top: 50px;
  margin-bottom: 10px;
  color: #051b35;
  font-size: 30px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
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

+ `src/components/common/UserLogin.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Login from '../../assets/images/login.png'

class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='p-2'>
            <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
              <Row className='text-center'>
                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                  <Form className='onboardForm'>
                    <h4 className='section-title-login'>USER SING IN</h4>
                    <h6 className='section-sub-title'>Please Enter Your Mobile Number</h6>
                    <input className='form-control m-2' type="text" placeholder='Enter Mobile Number' />
                    <Button className='btn btn-block m-2 site-btn-login'>Mext</Button>
                  </Form>
                </Col>
                <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}>
                  <img className='onboardBanner' src={Login} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default UserLogin
```

## 285 Contact page with map

+ `src/pages/ContactPage.jsx`コンポーネントを作成<br>

+ `src/components/common/Contact.jsx`コンポーネントを作成<br>

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import ContactPage from '../pages/ContactPage' // 追記
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} /> // 追記
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/pages/ContactPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import Contact from '../components/common/Contact'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Contact />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default ContactPage
```

+ `src/components/common/FooterDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFIECE ADDRESS</h5>
                <p>
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                  <br />
                  Email: Support@easylearningbd.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br />
                <Link to="/contact" className="footer-link"> // 編集
                  Contact Us
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/" className="footer-link">
                  How To Purchase
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Privacy Policy
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Refund Policy
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a>
                  <img src={Google} />
                </a>
                <br />
                <a>
                  <img className="mt-2" src={Apple} />
                </a>
                <br />
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className='text-white'>©︎ Copyright 2021 by easy Shop, All Rights Reserved</h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
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
.section-title-contact { // 追記
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #051b35;
  font-weight: 400;
}
.section-title-login {
  margin-top: 50px;
  margin-bottom: 10px;
  color: #051b35;
  font-size: 30px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
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

+ `src/components/common/Contact.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US</h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us
                    </h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Message"
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br />
                  <br />
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104
                    <br />
                    Email: Support@easylearningbd.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOODi-ODpeODvOODqOODvOOCr-W3niDjg4vjg6Xjg7zjg6jjg7zjgq8!5e0!3m2!1sja!2sjp!4v1640079892734!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
```

## 286 Other's Page

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
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

class HomePage extends Component {
  componentDidMount() { // 追記
    window.scroll(0, 0)
  }

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
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default HomePage
```

+ `src/pages/ContactPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import Contact from '../components/common/Contact'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

class ContactPage extends Component {
  componentDidMount() { // 追記
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Contact />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default ContactPage
```

+ `src/pages/UserLoginPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'

class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserLogin />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default UserLoginPage
```

+ `src/components/common/Contact.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US</h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us
                    </h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Message"
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br />
                  <br />
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104
                    <br />
                    Email: Support@easylearningbd.com
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOODi-ODpeODvOODqOODvOOCr-W3niDjg4vjg6Xjg7zjg6jjg7zjgq8!5e0!3m2!1sja!2sjp!4v1640079892734!5m2!1sja!2sjp"
                    width="550" // 編集
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
```

+ `src/pages/PurchasePage.jsx`コンポーネントを作成<br>

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import PurchasePage from '../pages/PurchasePage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/ohters`ディレクトリを作成<br>

+ `src/components/ohters/Purchase.jsx`コンポーネントを作成<br>

+ `src/pages/PurchasePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Purchase from '../components/ohters/Purchase'

class PurchasePage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Purchase />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default PurchasePage
```

+ `src/components/others/Purchase.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-tile-login">Purchase Page</h4>
              <p className="section-title-contact">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
                teaching I am a founder of easy Learning and a passionate Web
                Developer, Programmer & Instructor.<br /><br />
                I am working online for the last 9 years and have created several successful websites
                running on the internet.<br /><br />
                I try to create a project-based course that helps you to learn professionally and make you fell as a
                complete developer. easy learning exists to help you succeed in
                life. Each course has been hand-tailored to teach a specific
                skill.<br /><br />
                I hope you agree! Whether you’re trying to learn a new
                skill from scratch or want to refresh your memory on something
                you’ve learned in the past, you’ve come to the right place.
                Education makes the world a better place. Make your world better
                with new skills.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Purchase
```

+ `src/components/common/FooterDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFIECE ADDRESS</h5>
                <p>
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                  <br />
                  Email: Support@easylearningbd.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br />
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/purchase" className="footer-link"> // 編集
                  How To Purchase
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Privacy Policy
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Refund Policy
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a>
                  <img src={Google} />
                </a>
                <br />
                <a>
                  <img className="mt-2" src={Apple} />
                </a>
                <br />
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className='text-white'>©︎ Copyright 2021 by easy Shop, All Rights Reserved</h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
```

+ `src/pages/PrivacyPage.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Privacy from '../components/ohters/Privacy'

class PrivacyPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Privacy />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default PrivacyPage
```

+ `src/pages/RefundPage.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Refund from '../components/ohters/Refund'

class RefundPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Refund />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default RefundPage
```

+ `src/components/ohters/Privacy.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Privacy extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-tile-login">Privacy Page</h4>
              <p className="section-title-contact">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
                teaching I am a founder of easy Learning and a passionate Web
                Developer, Programmer & Instructor.
                <br />
                <br />
                I am working online for the last 9 years and have created
                several successful websites running on the internet.
                <br />
                <br />
                I try to create a project-based course that helps you to learn
                professionally and make you fell as a complete developer. easy
                learning exists to help you succeed in life. Each course has
                been hand-tailored to teach a specific skill.
                <br />
                <br />I hope you agree! Whether you’re trying to learn a new
                skill from scratch or want to refresh your memory on something
                you’ve learned in the past, you’ve come to the right place.
                Education makes the world a better place. Make your world better
                with new skills.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Privacy
```

+ `src/components/ohters/Refund.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Refund extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-tile-login">Refund Page</h4>
              <p className="section-title-contact">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
                teaching I am a founder of easy Learning and a passionate Web
                Developer, Programmer & Instructor.
                <br />
                <br />
                I am working online for the last 9 years and have created
                several successful websites running on the internet.
                <br />
                <br />
                I try to create a project-based course that helps you to learn
                professionally and make you fell as a complete developer. easy
                learning exists to help you succeed in life. Each course has
                been hand-tailored to teach a specific skill.
                <br />
                <br />I hope you agree! Whether you’re trying to learn a new
                skill from scratch or want to refresh your memory on something
                you’ve learned in the past, you’ve come to the right place.
                Education makes the world a better place. Make your world better
                with new skills.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Refund
```

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import PrivacyPage from '../pages/PrivacyPage'
import PurchasePage from '../pages/PurchasePage'
import RefundPage from '../pages/RefundPage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/common/FooterDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFIECE ADDRESS</h5>
                <p>
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                  <br />
                  Email: Support@easylearningbd.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br />
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/purchase" className="footer-link">
                  How To Purchase
                </Link>
                <br />
                <Link to="/privacy" className="footer-link"> // 編集
                  Privacy Policy
                </Link>
                <br />
                <Link to="/refund" className="footer-link"> // 編集
                  Refund Policy
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a>
                  <img src={Google} />
                </a>
                <br />
                <a>
                  <img className="mt-2" src={Apple} />
                </a>
                <br />
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className='text-white'>©︎ Copyright 2021 by easy Shop, All Rights Reserved</h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
```




