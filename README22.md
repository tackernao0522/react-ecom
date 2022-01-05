# Section37: Design Login And Register Authentication Pages

## 356 Desing Login and Register Page

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
                    <input className='form-control m-2' type="email" placeholder='Enter Your Email' />
                    <input className='form-control m-2' type="password" placeholder='Enter Your Password' />
                    <Button className='btn btn-block m-2 site-btn-login'>Login</Button>
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

+ `src/pages/RegisterPage.jsx`コンポーネントを作成<br>

+ `src/components/common/Register.jsx`コンポーネントを作成<br>

+ `src/pages/RegisterPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Register from '../components/common/Register'

class RegisterPage extends Component {
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
        <Register />
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

export default RegisterPage
```

+ `src/components/common/Register.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Login from '../../assets/images/login.png'

class Register extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='p-2'>
            <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
              <Row className='text-center'>
                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                  <Form className='onboardForm'>
                    <h4 className='section-title-login'>USER REGISTER</h4>
                    <input className='form-control m-2' type="text" placeholder='Enter Your Name' />
                    <input className='form-control m-2' type="email" placeholder='Enter Your Email' />
                    <input className='form-control m-2' type="password" placeholder='Enter Your Password' />
                    <input className='form-control m-2' type="password" placeholder='Confirm Your Password' />
                    <Button className='btn btn-block m-2 site-btn-login'>Sign Up</Button>
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

export default Register
```

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PrivacyPage from '../pages/PrivacyPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'
import PurchasePage from '../pages/PurchasePage'
import RefundPage from '../pages/RefundPage'
import RegisterPage from '../pages/RegisterPage'
import SearchPage from '../pages/SearchPage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} />} />
          <Route exact path="/register" render={(props) => <RegisterPage {...props} key={Date.now()} />} /> // 追記
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />

          <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()} />} />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />
          <Route exact path="/favorite" render={(props) => <FavoritePage {...props} key={Date.now()} />} />
          <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} />} />
          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} />} />
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
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
  }

  SearchOnChange(event) {
    let SearchKey = event.target.value
    // alert(SearchKey)
    this.setState({ SearchKey: SearchKey })
  }

  SearchOnClick() {
    if (this.state.SearchKey.length >= 2) {
      this.setState({ SearchRedirectStatus: true })
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Redirect to={`/productbysearch/${this.state.SearchKey}`} />
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
                  <img
                    onClick={this.MenuBarClickHandler}
                    src={Bars}
                    className="bar-img"
                  />
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      onChange={this.SearchOnChange}
                      type="text"
                      className="form-control"
                    />
                    <Button
                      onClick={this.SearchOnClick}
                      type="button"
                      className="btn site-btn"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/favorite" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">3</span>
                    </sup>
                  </Link>
                  <Link to="/notification" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <Link to="/login" className="h4 btn">
                    LOGIN
                  </Link>
                  <Link to="/register" className="h4 btn">
                    Register
                  </Link>
                  <Link to="/cart" className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Link>
                </Col>
              </Row>
              {this.searchRedirect()}
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

+ `src/components/common/Register.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from '../../assets/images/login.png'

class Register extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='p-2'>
            <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
              <Row className='text-center'>
                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                  <Form className='onboardForm'>
                    <h4 className='section-title-login'>USER REGISTER</h4>
                    <input className='form-control m-2' type="text" placeholder='Enter Your Name' />
                    <input className='form-control m-2' type="email" placeholder='Enter Your Email' />
                    <input className='form-control m-2' type="password" placeholder='Enter Your Password' />
                    <input className='form-control m-2' type="password" placeholder='Confirm Your Password' />
                    <Button className='btn btn-block m-2 site-btn-login'>Sign Up</Button>
                    <br /> //
                    <br /> //
                    <hr /> //
                    <p><b>Forget My Password? </b><Link><b>Forget Password</b></Link></p> // 追記
                    <p><b>Already Have An Account? </b><Link to="/login"><b>Login</b></Link></p> // 追記
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

export default Register
```

+ `src/components/common/UserLogin.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                    <input className='form-control m-2' type="email" placeholder='Enter Your Email' />
                    <input className='form-control m-2' type="password" placeholder='Enter Your Password' />
                    <Button className='btn btn-block m-2 site-btn-login'>Login</Button>
                    <br /> //
                    <br /> //
                    <hr /> //
                    <p><b>Forget My Password? </b><Link><b>Forget Password</b></Link></p> // 追記
                    <p><b>Don't Have An Account? </b><Link to="/register"><b>Register</b></Link></p> // 追記
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
