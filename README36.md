## 408 Cart List Confirm Order Part3

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
  static CartOrder = `${this.BaseURL}/cartOrder`
}

export default AppURL
```

- `src/components/cart/Cart.jsx`を編集<br>

```jsx:Cart.jsx
import axios from 'axios'
import cogoToast from 'cogo-toast'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      CartListData: [],
      isLoading: '',
      mainDiv: 'd-none',
      PageRefreshStatus: false,
      confirmBtn: 'Confirm Order',
      city: '',
      payment: '',
      name: '',
      address: '',
    }
    this.removeItem = this.removeItem.bind(this)
    this.PageRefresh = this.PageRefresh.bind(this)
    this.itemPlus = this.itemPlus.bind(this)
    this.itemMinus = this.itemMinus.bind(this)
    this.cityOnChange = this.cityOnChange.bind(this)
    this.paymentMethodOnChange = this.paymentMethodOnChange.bind(this)
    this.nameOnChange = this.nameOnChange.bind(this)
    this.addressOnChange = this.addressOnChange.bind(this)
    this.confirmOnClick = this.confirmOnClick.bind(this)
  }

  componentDidMount() {
    axios
      .get(AppURL.CartList(this.props.user.email))
      .then((res) => {
        // console.log(res.data)
        this.setState({
          CartListData: res.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location
      return <Redirect to={URL} />
    }
  }

  removeItem = (id) => {
    axios
      .get(AppURL.RemoveCartList(id))
      .then((res) => {
        if (res.data === 1) {
          cogoToast.success('Cart Item Remove', { position: 'top-right' })
          this.setState({ PageRefreshStatus: true })
        } else {
          cogoToast.error('Your Request is not done ! Try Again', {
            position: 'top-right',
          })
        }
      })
      .catch((error) => {
        cogoToast.error('Your Request is not done ! Try Again', {
          position: 'top-right',
        })
      })
  }

  itemPlus = (id, quantity, price) => {
    axios
      .get(AppURL.CartItemPlus(id, quantity, price))
      .then((res) => {
        if (res.data === 1) {
          cogoToast.success('Item Quantity Increased', {
            position: 'top-right',
          })
          this.setState({ PageRefreshStatus: true })
        } else {
          cogoToast.error('Your Request is not done ! Try Again', {
            position: 'top-right',
          })
        }
      })
      .catch((error) => {
        cogoToast.error('Your Request in not done ! Try Again', {
          position: 'top-right',
        })
      })
  }

  itemMinus = (id, quantity, price) => {
    axios
      .get(AppURL.CartItemMinus(id, quantity, price))
      .then((res) => {
        if (res.data === 1) {
          cogoToast.success('Item Quantity Decreased', {
            position: 'top-right',
          })
          this.setState({ PageRefreshStatus: true })
        } else {
          cogoToast.error('Your Request is not done ! Try Again', {
            position: 'top-right',
          })
        }
      })
      .catch((error) => {
        cogoToast.error('Your Request in not done ! Try Again', {
          position: 'top-right',
        })
      })
  }

  cityOnChange = (event) => {
    let city = event.target.value
    this.setState({ city: city })
  }

  paymentMethodOnChange = (event) => {
    let payment = event.target.value
    this.setState({ payment: payment })
  }

  nameOnChange = (event) => {
    let name = event.target.value
    this.setState({ name: name })
  }

  addressOnChange = (event) => {
    let address = event.target.value
    this.setState({ address: address })
  }

  confirmOnClick = () => {
    let city = this.state.city
    let payment = this.state.payment
    let name = this.state.name
    let address = this.state.address
    let email = this.props.user.email

    if (city.length === 0) {
      cogoToast.error('Please Select City', { position: 'top-right' })
    } else if (payment.length === 0) {
      cogoToast.error('Plese Select Payment', { position: 'top-right' })
    } else if (name.length === 0) {
      cogoToast.error('please Select Your Name', { position: 'top-right' })
    } else if (address.length === 0) {
      cogoToast.error('Please Select Your Address', { position: 'top-right' })
    } else {
    }
  }

  render() {
    const CartList = this.state.CartListData
    let totalPriceSum = 0
    const MyView = CartList.map((CartList, i) => {
      totalPriceSum = totalPriceSum + parseInt(CartList.total_price)
      return (
        <Col key={i.toString()} className="p-1" lg={12} md={12} sm={12} xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} lg={3} sm={6} xs={6}>
                  <img className="cart-product-img" src={CartList.image} />
                </Col>

                <Col md={6} lg={6} sm={6} xs={6}>
                  <h5 className="product-name">{CartList.product_name}</h5>
                  <h6> Quantity = {CartList.quantity} </h6>
                  <p>
                    {CartList.size} | {CartList.color}
                  </p>
                  <h6>
                    Price = {CartList.unit_price} x {CartList.quantity} =
                    {CartList.total_price}$
                  </h6>
                </Col>

                <Col md={3} lg={3} sm={12} xs={12}>
                  <Button
                    onClick={() => this.removeItem(CartList.id)}
                    className="btn mt-2 mx-1 btn-lg site-btn"
                  >
                    <i className="fa fa-trash-alt"></i>
                  </Button>

                  <Button
                    onClick={() =>
                      this.itemPlus(
                        CartList.id,
                        CartList.quantity,
                        CartList.unit_price,
                      )
                    }
                    className="btn mt-2 mx-1 btn-lg site-btn"
                  >
                    <i className="fa fa-plus"></i>
                  </Button>

                  <Button
                    onClick={() =>
                      this.itemMinus(
                        CartList.id,
                        CartList.quantity,
                        CartList.unit_price,
                      )
                    }
                    className="btn mt-2 mx-1 btn-lg site-btn"
                  >
                    <i className="fa fa-minus"></i>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      )
    })

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>

          <Row>
            <Col className="p-1" lg={7} md={7} sm={12} xs={12}>
              {MyView}
            </Col>

            <Col className="p-1" lg={5} md={5} sm={12} xs={12}>
              <div className="card p-2">
                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                        <h5 className="Product-Name text-danger">
                          Total Due: {totalPriceSum} $
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Choose City</label>
                        <select
                          onChange={this.cityOnChange}
                          className="form-control"
                        >
                          <option value="">Choose</option>
                          <option value="Dhaka">Assam</option>
                          <option value="Dhaka">Bihar </option>
                          <option value="Dhaka">Goa </option>
                          <option value="Dhaka">Gujarat </option>
                          <option value="Dhaka">Himachal Pradesh </option>
                          <option value="Dhaka">Punjab </option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">
                          Choose Payment Method
                        </label>
                        <select
                          onChange={this.paymentMethodOnChange}
                          className="form-control"
                        >
                          <option value="">Choose</option>
                          <option value="Cash On Delivery">
                            Cash On Delivery
                          </option>
                          <option value="Cash On Delivery">Stripe</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Your Name</label>
                        <input
                          onChange={this.nameOnChange}
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>

                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Delivery Address</label>
                        <textarea
                          onChange={this.addressOnChange}
                          rows={2}
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <button
                          onClick={this.confirmOnClick}
                          className="btn site-btn"
                        >
                          {this.state.confirmBtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {this.PageRefresh()}
      </Fragment>
    )
  }
}

export default Cart
```

## 409 Cart List Confirm Order Part4

- `src/pages/OrderListPage.jsx`コンポーネントを作成<br>

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
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <OrderList />
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

- `src/components/cart/OrderList.jsx`コンポーネントを作成<br>

```jsx:OrderList.jsx
import React, { Component, Fragment } from 'react'

class OrderList extends Component {
  render() {
    return (
      <Fragment>
        <h1>Order List Page</h1>
      </Fragment>
    )
  }
}

export default OrderList
```

- `src/route/AppRoute.js`を編集<br>

```js:AppRoute.js
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
            render={(props) => <OrderListPage {...props} key={Date.now()} />}
          />{' '}
          // 追記
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```
