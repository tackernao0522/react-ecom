## 369 Consume User Authentication Registration

- `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = 'http://localhost/api'
  static VisitorDetails = this.BaseURL + '/getvisitor'
  static AllSiteInfo = this.BaseURL + '/allsiteinfo'
  static AllCategoryDetails = this.BaseURL + '/allcategory'
  static ProductListByRemark(remark) {
    return this.BaseURL + '/productlistbyremark/' + remark
  }
  static ProductListByCategory(category) {
    return this.BaseURL + '/productlistbycategory/' + category
  }
  static ProductlistBySubcategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    )
  }
  static AllSlider = this.BaseURL + '/allslider'
  static ProductDetails(code) {
    return this.BaseURL + '/productdetails/' + code
  }
  static NotificationHistory = this.BaseURL + '/notification'
  static ProductBySearch(searchkey) {
    return this.BaseURL + '/search/' + searchkey
  }
  static UserLogin = this.BaseURL + '/login'
  static UserData = this.BaseURL + '/user'
  static UserRegister = `${this.BaseURL}/register` // 追記
}

export default AppURL
```

- `src/components/common/Register.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import Login from '../../assets/images/login.png'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      loggedIn: false,
    }
  }

  // register Form Submit
  formSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    }

    axios
      .post(AppURL.UserRegister, data)
      .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        this.setState({
          loggedIn: true,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    // After Register Redirect to Profile
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />
    }

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
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">USER REGISTER</h4>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      onChange={(e) => {
                        this.setState({ name: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      onChange={(e) => {
                        this.setState({ email: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Enter Your Password"
                      required
                      onChange={(e) => {
                        this.setState({ password: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Confirm Your Password"
                      required
                      onChange={(e) => {
                        this.setState({ password_confirmation: e.target.value })
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Sign Up
                    </Button>
                    <br />
                    <br />
                    <hr />
                    <p>
                      <b>Forget My Password? </b>
                      <Link to="/forget">
                        <b>Forget Password</b>
                      </Link>
                    </p>
                    <p>
                      <b>Already Have An Account? </b>
                      <Link to="/login">
                        <b>Login</b>
                      </Link>
                    </p>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} />
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

## 370 Fixed Login Bugs

- `src/route/AppRoute.js`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import AppURL from '../api/AppURL'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import FavoritePage from '../pages/FavoritePage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PrivacyPage from '../pages/PrivacyPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'
import ProfilePage from '../pages/ProfilePage'
import PurchasePage from '../pages/PurchasePage'
import RefundPage from '../pages/RefundPage'
import RegisterPage from '../pages/RegisterPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import SearchPage from '../pages/SearchPage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
    this.setUser = this.setUser.bind(this)
  }

  componentDidMount() {
    // Login User Credentials
    axios
      .get(AppURL.UserData)
      .then((resp) => {
        this.setUser(resp.data)
      })
      .catch((error) => {
        return console.log(error)
      })
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} /> // 編集
          <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} /> // 編集
          <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />} />
          <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} />} />
          <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
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

- `src/pages/UserLoginPage.jsx`を編集<br>

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
    const setUser = this.props.setUser; // 追記
    const user = this.props.user; // 追記

    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserLogin setUser={setUser} user={user} /> // 編集
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

- `src/components/common/UserLogin.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import Login from '../../assets/images/login.png'

class UserLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      message: '',
      loggedIn: false,
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  // Login Form Submit
  formSubmit = (e) => {
    e.preventDefault()

    const data = {
      email: this.state.email,
      password: this.state.password,
    }

    axios
      .post(AppURL.UserLogin, data)
      .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        this.setState({ loggedIn: true })
        this.props.setUser(resp.data.user) // 追記
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    // After Login Redirect to Profile
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />
    }

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
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">USER SING IN</h4>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      onChange={(e) => {
                        this.setState({ email: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Enter Your Password"
                      required
                      onChange={(e) => {
                        this.setState({ password: e.target.value })
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Login
                    </Button>
                    <br />
                    <br />
                    <hr />
                    <p>
                      <b>Forget My Password? </b>
                      <Link to="/forget">
                        <b>Forget Password</b>
                      </Link>
                    </p>
                    <p>
                      <b>Don't Have An Account? </b>
                      <Link to="/register">
                        <b>Register</b>
                      </Link>
                    </p>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} />
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

- `src/pages/Register.jsx`を編集<br>

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
    const setUser = this.props.setUser // 追記
    const user = this.props.user // 追記

    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Register setUser={setUser} user={user} /> // 編集
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

- `src/components/common/Register.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import Login from '../../assets/images/login.png'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      loggedIn: false,
    }
  }

  // register Form Submit
  formSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    }

    axios
      .post(AppURL.UserRegister, data)
      .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        this.setState({
          loggedIn: true,
        })
        this.props.setUser(resp.data.user) // 追記
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    // After Register Redirect to Profile
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />
    }

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
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">USER REGISTER</h4>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      onChange={(e) => {
                        this.setState({ name: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      onChange={(e) => {
                        this.setState({ email: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Enter Your Password"
                      required
                      onChange={(e) => {
                        this.setState({ password: e.target.value })
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Confirm Your Password"
                      required
                      onChange={(e) => {
                        this.setState({ password_confirmation: e.target.value })
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Sign Up
                    </Button>
                    <br />
                    <br />
                    <hr />
                    <p>
                      <b>Forget My Password? </b>
                      <Link to="/forget">
                        <b>Forget Password</b>
                      </Link>
                    </p>
                    <p>
                      <b>Already Have An Account? </b>
                      <Link to="/login">
                        <b>Login</b>
                      </Link>
                    </p>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} />
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
