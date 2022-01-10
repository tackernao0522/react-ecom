## 374 Consume User Authentication Error Showing

- `src/components/common/ForgetPassword.jsx`を編集<br>

```jsx:ForgetPassword.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Forget from '../../assets/images/forget.jpg'
import AppURL from '../../api/AppURL'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class ForgetPassword extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      message: '',
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  // Forget Password Form Submit
  formSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
    }
    axios
      .post(AppURL.UserForgetPassword, data)
      .then((resp) => {
        // console.log(resp)
        this.setState({ message: resp.data.message })
        toast.success(this.state.message, {
          position: 'top-right',
        })
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message })
        toast.error(this.state.message, {
          position: 'top-right',
        })
      })
  }

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
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">FORGET PASSWORD ?</h4>
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      onChange={(e) => {
                        this.setState({ email: e.target.value })
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Reset Password
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Forget} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default ForgetPassword
```

## 375 Consume User Authentication Reset Password

- `src/api/AppURL/jsx`を編集<br>

```jsx:AppIRL.jsx
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
  static UserRegister = `${this.BaseURL}/register`
  static UserForgetPassword = `${this.BaseURL}/forgetpassword`
  static UserResetPassword = `${this.BaseURL}/resetpassword` // 追記
}

export default AppURL
```

- `src/components/common/ResetPassword.jsx`を編集<br>

```jsx:ResetPassword.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import Forget from '../../assets/images/forget.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class ResetPassword extends Component {
  constructor() {
    super()
    this.state = {
      token: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  // Reset Form Submit Method
  formSubmit = (e) => {
    e.preventDefault()
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    }

    axios
      .post(AppURL.UserResetPassword, data)
      .then((resp) => {
        this.setState({ message: resp.data.message })
        toast.success(this.state.message, {
          position: 'top-right',
        })
        document.getElementById('fromreset').reset()
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message })
        toast.error(this.state.message, {
          position: 'top-right',
        })
      })
  }

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
                  <Form
                    className="onboardForm"
                    onSubmit={this.formSubmit}
                    id="fromreset"
                  >
                    <h4 className="section-title-login"> RESET PASSWORD </h4>

                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Pin Code"
                      required
                      onChange={(e) => {
                        this.setState({ token: e.target.value })
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
                      placeholder="Your New Password"
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
                      Reset Password
                    </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Forget} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default ResetPassword
```

## 376 Consume User Authentication Protect Url

- `src/components/common/Profile.jsx`を編集<br>

```jsx:Profile.jsx
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
  render() {
    let name
    let email

    if (this.props.user) {
      name = this.props.user.name
      email = this.props.user.email
    }

    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    }

    return (
      <Fragment>
        <h1>User Profile Page</h1>
        <ul className="list-group">
          <li className="list-group-item">Name : {name}</li>
          <li className="list-group-item">Email : {email}</li>
        </ul>
      </Fragment>
    )
  }
}

export default Profile
```

- `src/components/common/UserLogin.jsx`を編集<br>

```jsx:UserLogin.jsx
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
        this.props.setUser(resp.data.user)
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

    if (localStorage.getItem('token')) {
      return <Redirect to="/profile" />
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
                    <h4 className="section-title-login">USER SIGN IN</h4>
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

- `src/components/common/Register.jsx`を編集<br>

```jsx:Register.jsx
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
        this.props.setUser(resp.data.user)
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

    if (localStorage.getItem('token')) {
      return <Redirect to="/profile" />
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
