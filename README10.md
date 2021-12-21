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
