## 401 Cart Item Remove Part1

- `Laravel Project`を編集<br>

## 402 Cart Item Remove Part2

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
  } // 追記
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
    }
    this.removeItem = this.removeItem.bind(this)
    this.PageRefresh = this.PageRefresh.bind(this)
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

  render() {
    const CartList = this.state.CartListData
    const MyView = CartList.map((CartList, i) => (
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
                  Price = {CartList.unit_price} x {CartList.quantity} ={' '}
                  {CartList.total_price}$
                </h6>
              </Col>

              <Col md={3} lg={3} sm={12} xs={12}>
                <Button
                  onClick={() => this.removeItem(CartList.id)}
                  className="btn btn-block w-100 mt-3  site-btn"
                >
                  <i className="fa fa-trash-alt"></i> Remove
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    ))

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>

          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              {MyView}
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
