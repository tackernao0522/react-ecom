# Section44: Product Order History Option Setup

## 410 Product Order History Part1

- `Laravel Project`を編集<br>

## 411 Product Order History Part2

- `src/api/AppURL.jsx`を編集<br>

```jsx:AppURL.jsx
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
  static UserResetPassword = `${this.BaseURL}/resetpassword`

  static SimilarProduct(code) {
    return `${this.BaseURL}/similar/${code}`
  }
  static ReviewList(code) {
    return `${this.BaseURL}/reviewlist/${code}`
  }
  static AddToCard = `${this.BaseURL}/addtocart`
  static CartCount(product_code) {
    return `${this.BaseURL}/cartcount/${product_code}`
  }
  static AddFavorite(product_code, email) {
    return `${this.BaseURL}/favorite/${product_code}/${email}`
  }
  static FavoriteList(email) {
    return `${this.BaseURL}/favoritelist/${email}`
  }
  static FavoriteRemove(product_code, email) {
    return `${this.BaseURL}/favoriteremove/${product_code}/${email}`
  }
  static CartList(email) {
    return `${this.BaseURL}/cartlist/${email}`
  }
  static RemoveCartList(id) {
    return `${this.BaseURL}/removecartlist/${id}`
  }
  static CartItemPlus(id, quantity, price) {
    return `${this.BaseURL}/cartitemplus/${id}/${quantity}/${price}`
  }
  static CartItemMinus(id, quantity, price) {
    return `${this.BaseURL}/cartitemminus/${id}/${quantity}/${price}`
  }
  static CartOrder = `${this.BaseURL}/cartorder`
  static OrderListByUser(email) {
    return `${this.BaseURL}/orderlistbyuser/${email}`
  } // 追記
}

export default AppURL
```

- `src/route/AppRoute.js`を編集<br>

```jsx:AppRoute.js
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
import OrderListPage from '../pages/OrderListPage'
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
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <UserLoginPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <RegisterPage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/forget"
            render={(props) => (
              <ForgetPasswordPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/reset/:id"
            render={(props) => (
              <ResetPasswordPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <ProfilePage
                user={this.state.user}
                setUser={this.setUser}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <ContactPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/purchase"
            render={(props) => <PurchasePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/privacy"
            render={(props) => <PrivacyPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/refund"
            render={(props) => <RefundPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/about"
            render={(props) => <AboutPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/productdetails/:code"
            render={(props) => (
              <ProductDetailsPage
                user={this.state.user}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/notification"
            render={(props) => <NotificationPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/favorite"
            render={(props) => (
              <FavoritePage
                user={this.state.user}
                {...props}
                key={Date.now()}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartPage user={this.state.user} {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/productcategory/:category"
            render={(props) => (
              <ProductCategoryPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/productsubcategory/:category/:subcategory"
            render={(props) => (
              <ProductSubCategoryPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/productbysearch/:searchkey"
            render={(props) => <SearchPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/orderlist"
            render={(props) => (
              <OrderListPage
                user={this.state.user}
                {...props}
                key={Date.now()}
              />
            )} // 編集
          />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

- `src/pages/OrderListPage.jsx`を編集<br>

```jsx:OrderListPage.jsx
import React, { Component, Fragment } from 'react'
import OrderList from '../components/cart/OrderList'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

class OrderListPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    const User = this.props.user // 追記

    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <OrderList user={User} /> // 編集
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

export default OrderListPage
```

- `src/components/cart/OrderList.jsx`を編集<br>

```jsx:OrderList.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class OrderList extends Component {
  constructor() {
    super()
    this.state = {
      OrderListData: [],
    }
  }

  componentDidMount() {
    let email = this.props.user.email

    axios
      .get(AppURL.OrderListByUser(email))
      .then((res) => {
        this.setState({ OrderListData: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const OrderList = this.state.OrderListData

    const MyView = OrderList.map((OrderList, i) => (
      <div>
        <Col key={i.toString()} md={6} lg={6} sm={6} xs={6}>
          <h5 className="product-name">{OrderList.product_name}</h5>
          <h6> Quantity = {OrderList.quantity} </h6>
          <p>
            {OrderList.size} | {OrderList.color}
          </p>
          <h6>
            Price = {OrderList.unit_price} x {OrderList.quantity} =
            {OrderList.total_price}$
          </h6>
          <h6>Status = {OrderList.order_status}</h6>
        </Col>
        <Button className="btn btn-danger">Post Review</Button>
        <hr />
      </div>
    ))

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Order History</h2>
          </div>

          <Card>
            <Card.Body>
              <Row>{MyView}</Row>
            </Card.Body>
          </Card>
        </Container>
      </Fragment>
    )
  }
}

export default OrderList
```

## 412 Product Order History Part3

- `src/components/cart/OrderList.jsx`を編集<br>

```jsx:OrderList.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class OrderList extends Component {
  constructor() {
    super()
    this.state = {
      OrderListData: [],
      show: false,
      NotificationData: [],
      isLoading: '',
      mainDiv: 'd-done',
      Notificationmsg: '',
      Notificationtitle: '',
      Notificationdate: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount() {
    let email = this.props.user.email

    axios
      .get(AppURL.OrderListByUser(email))
      .then((res) => {
        this.setState({ OrderListData: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = (event) => {
    this.setState({ show: true })
    let Nmsg = event.target.getAttribute('data-message')
    let Ntitle = event.target.getAttribute('data-title')
    let Ndate = event.target.getAttribute('data-date')
    this.setState({
      Notificationmsg: Nmsg,
      Notificationtitle: Ntitle,
      Notificationdate: Ndate,
    })
  }

  render() {
    const OrderList = this.state.OrderListData

    const MyView = OrderList.map((OrderList, i) => (
      <div>
        <Col key={i.toString()} md={6} lg={6} sm={6} xs={6}>
          <h5 className="product-name">{OrderList.product_name}</h5>
          <h6> Quantity = {OrderList.quantity} </h6>
          <p>
            {OrderList.size} | {OrderList.color}
          </p>
          <h6>
            Price = {OrderList.unit_price} x {OrderList.quantity} =
            {OrderList.total_price}$
          </h6>
          <h6>Status = {OrderList.order_status}</h6>
        </Col>
        <Button onClick={this.handleShow} className="btn btn-danger">
          Post Review
        </Button>
        <hr />
      </div>
    ))

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Order History</h2>
          </div>

          <Card>
            <Card.Body>
              <Row>{MyView}</Row>
            </Card.Body>
          </Card>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Post Your Review
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>review</h6>
            <p>review</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default OrderList
```

# Section45: Product Review Option Setup

## 413 Update Profile Page

- `src/assets/css/typo.css`を編集<br>

```css:typo.css
.section-title {
  margin-top: 50px;
  margin-bottom: 50px;
  color: #051b35;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.section-title-contact {
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
.text-link {
  color: inherit;
  text-decoration: inherit;
}
.breadbody {
  background-color: #e6e6e6;
  padding-top: 20px;
  padding-bottom: 7px;
  padding-left: 30px;
  font-weight: 600;
  border-radius: 10px;
}
.userprofile {
  // 追記
  width: 200px;
  height: 200px;
  margin-left: 80px;
}
```

- `src/assets/images`にプロフィール画像を設置<br>

* `src/components/cart/OrderList.jsx`を編集<br>

```jsx:OrderList.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class OrderList extends Component {
  constructor() {
    super()
    this.state = {
      OrderListData: [],
      show: false,
      NotificationData: [],
      isLoading: '',
      mainDiv: 'd-done',
      Notificationmsg: '',
      Notificationtitle: '',
      Notificationdate: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount() {
    let email = this.props.user.email

    axios
      .get(AppURL.OrderListByUser(email))
      .then((res) => {
        this.setState({ OrderListData: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = (event) => {
    this.setState({ show: true })
    let Nmsg = event.target.getAttribute('data-message')
    let Ntitle = event.target.getAttribute('data-title')
    let Ndate = event.target.getAttribute('data-date')
    this.setState({
      Notificationmsg: Nmsg,
      Notificationtitle: Ntitle,
      Notificationdate: Ndate,
    })
  }

  render() {
    const OrderList = this.state.OrderListData

    const MyView = OrderList.map((OrderList, i) => (
      <div>
        <Col key={i.toString()} md={6} lg={6} sm={6} xs={6}>
          <h5 className="product-name">{OrderList.product_name}</h5>
          <h6> Quantity = {OrderList.quantity} </h6>
          <p>
            {OrderList.size} | {OrderList.color}
          </p>
          <h6>
            Price = {OrderList.unit_price} x {OrderList.quantity} =
            {OrderList.total_price}$
          </h6>
          <h6>Status = {OrderList.order_status}</h6>
        </Col>
        <Button onClick={this.handleShow} className="btn btn-danger">
          Post Review
        </Button>
        <hr />
      </div>
    ))

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Order History By ( {this.props.user.name} )</h2> // 編集
          </div>

          <Card>
            <Card.Body>
              <Row>{MyView}</Row>
            </Card.Body>
          </Card>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Post Your Review
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>review</h6>
            <p>review</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default OrderList
```

- `src/components/common/Profile.jsx`を編集<br>

```jsx:Profile.jsx
import React, { Component, Fragment } from 'react'
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Taka from '../../assets/images/profile_image.jpg'

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
        <div className="section-title text-center mb-55">
          <h2>User Profile Page</h2>
        </div>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Taka} className="userprofile" />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Link className="text-link" to="/orderlist">
                      <p className="product-name-on-card">Order List</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link className="text-link" to="/orderlist">
                      <p className="product-name-on-card">Order List</p>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link className="text-link" to="/orderlist">
                      <p className="product-name-on-card">Order List</p>
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>

            <Col lg={8} md={8} sm={12}>
              <ul className="list-group">
                <li className="list-group-item">Name : {name}</li>
                <li className="list-group-item">Email : {email}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Profile
```
