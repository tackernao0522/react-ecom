## 415 Post Product Review Part2

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
      name: '',
      rating: '',
      comment: '',
      product_name: '',
      product_code: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.nameOnChange = this.nameOnChange.bind(this)
    this.ratingOnChange = this.ratingOnChange.bind(this)
    this.commentOnChange = this.commentOnChange.bind(this)
    this.postReview = this.postReview.bind(this)
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

  nameOnChange = (event) => {
    let name = event.target.value
    this.setState({ name: name })
  }

  ratingOnChange = (event) => {
    let rating = event.target.value
    this.setState({ rating: rating })
  }

  commentOnChange = (event) => {
    let comment = event.target.value
    this.setState({ comment: comment })
  }

  postReview = () => {}

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
            <h2>Order History By ( {this.props.user.name} )</h2>
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
              <label className="form-label">Select Product Rating</label>
              <select onChange={this.ratingOnChange} className="form-control">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Your Comment</label>
              <textarea
                onChange={this.commentOnChange}
                rows={2}
                className="form-control"
                type="text"
                placeholder="Your Comment"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.postReview}>
              Post
            </Button>
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

## 416 Post Product Review Part3

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
  }
  static PostReview = `${this.BaseURL}/postreview`
}

export default AppURL
```

## 416 Post Product Review Part3

- `src/components/cart/OrderList.jsx`を編集<br>

```jsx:OrderList.jsx
import axios from 'axios'
import cogoToast from 'cogo-toast'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class OrderList extends Component {
  constructor() {
    super()
    this.state = {
      OrderListData: [],
      show: false,
      name: '',
      rating: '',
      comment: '',
      product_name: '',
      product_code: '',
      reviewModal: false,
    }
    this.reviewModalClose = this.reviewModalClose.bind(this)
    this.nameOnChange = this.nameOnChange.bind(this)
    this.ratingOnChange = this.ratingOnChange.bind(this)
    this.commentOnChange = this.commentOnChange.bind(this)
    this.postReview = this.postReview.bind(this)
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

  reviewModalOpen = (product_code, product_name) => {
    this.setState({
      reviewModal: true,
      product_code: product_code,
      product_name: product_name,
    })
  }

  reviewModalClose = () => {
    this.setState({ reviewModal: false })
  }

  nameOnChange = (event) => {
    let name = event.target.value
    this.setState({ name: name })
  }

  ratingOnChange = (event) => {
    let rating = event.target.value
    this.setState({ rating: rating })
  }

  commentOnChange = (event) => {
    let comment = event.target.value
    this.setState({ comment: comment })
  }

  postReview = () => {
    let product_code = this.state.product_code
    let product_name = this.state.product_name
    let rating = this.state.rating
    let comment = this.state.comment
    let name = this.state.name

    if (name.length === 0) {
      cogoToast.error('Name Is Required', { position: 'top-right' })
    } else if (comment.length === 0) {
      cogoToast.error('Comment Is Required', { position: 'top-right' })
    } else if (rating.length === 0) {
      cogoToast.error('Rating Is Required', { position: 'top-right' })
    } else if (comment.length > 50) {
      cogoToast.error("Comments can't more then 150 character", {
        position: 'top-right',
      })
    } else {
      let MyFormData = new FormData()

      MyFormData.append('product_code', product_code)
      MyFormData.append('product_name', product_name)
      MyFormData.append('reviewer_name', name)
      MyFormData.append('reviewer_photo', '')
      MyFormData.append('reviewer_rating', rating)
      MyFormData.append('reviewer_comments', comment)

      axios
        .post(AppURL.PostReview, MyFormData)
        .then((res) => {
          if (res.data === 1) {
            cogoToast.success('Review Submitted', { position: 'top-right' })
            this.reviewModalClose()
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
        <Button
          onClick={this.reviewModalOpen.bind(
            this,
            OrderList.product_code,
            OrderList.product_name,
          )}
          className="btn btn-danger"
        >
          Post Review
        </Button>
        <hr />
      </div>
    ))

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Order History By ( {this.props.user.name} )</h2>
          </div>

          <Card>
            <Card.Body>
              <Row>{MyView}</Row>
            </Card.Body>
          </Card>
        </Container>

        <Modal show={this.state.reviewModal} onHide={this.reviewModalClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Post Your Review
            </h6>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Your Name</label>
              <input
                onChange={this.nameOnChange}
                className="form-control"
                type="text"
                placeholder={this.props.user.name}
              />
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Select Product Rating</label>
              <select onChange={this.ratingOnChange} className="form-control">
                <option value="">Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Your Comment</label>
              <textarea
                onChange={this.commentOnChange}
                rows={2}
                className="form-control"
                type="text"
                placeholder="Your Comment"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.postReview}>
              Post
            </Button>
            <Button variant="secondary" onClick={this.reviewModalClose}>
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
