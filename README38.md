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

## 417 Post Product Review Part4

- `Laravel Project`を編集<br>

* `src/components/productDetails/ProductDetails.jsx`を編集<br>

```jsx:ProductDetails.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import SuggestedProduct from './SuggestedProduct'
import ReviewList from './ReviewList'
import cogoToast from 'cogo-toast'
import AppURL from '../../api/AppURL'

class ProductDetails extends Component {
  constructor() {
    super()
    this.state = {
      previewImg: '0',
      isSize: null,
      isColor: null,
      color: '',
      size: '',
      quantity: '',
      productCode: null,
      addToCart: 'Add To Cart',
      pageRefreshStatus: false,
      addToFav: 'Favorite',
    }
    this.imgOnClick = this.imgOnClick.bind(this)
    this.colorOnChange = this.colorOnChange.bind(this)
    this.sizeOnChange = this.sizeOnChange.bind(this)
    this.quantityOnChange = this.quantityOnChange.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.PageRefresh = this.PageRefresh.bind(this)
    this.addToFav = this.addToFav.bind(this)
  }

  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute('src')
    this.setState({ previewImg: imgSrc })
  }

  addToCart = () => {
    let isSize = this.state.isSize
    let isColor = this.state.isColor
    let color = this.state.color
    let size = this.state.size
    let quantity = this.state.quantity
    let productCode = this.state.productCode
    let email = this.props.user.email

    if (isColor === 'YES' && color.length === 0) {
      cogoToast.error('Please Select Color', { position: 'top-right' })
    } else if (isSize === 'YES' && size.length === 0) {
      cogoToast.error('Please Select Size', { position: 'top-right' })
    } else if (quantity.length === 0) {
      cogoToast.error('Please Select Quantity', { postion: 'top-right' })
    } else if (!localStorage.getItem('token')) {
      cogoToast.warn('Please You have to Login First', {
        position: 'top-right',
      })
    } else {
      this.setState({ addToCart: 'Adding...' })
      let MyFormData = new FormData()
      MyFormData.append('color', color)
      MyFormData.append('size', size)
      MyFormData.append('quantity', quantity)
      MyFormData.append('product_code', productCode)
      MyFormData.append('email', email)

      axios
        .post(AppURL.AddToCard, MyFormData)
        .then((resp) => {
          if (resp.data === 1) {
            cogoToast.success('Product Added Successfully', {
              position: 'top-right',
            })
            this.setState({ addToCart: 'Add To Cart' })
            this.setState({ pageRefreshStatus: true })
          } else {
            cogoToast.error('Your Request is not done! Try Again', {
              position: 'rop-right',
            })
            this.setState({ addToCart: 'Add To Cart' })
          }
        })
        .catch((error) => {
          cogoToast.error('Your Request is not done! Try Again', {
            position: 'rop-right',
          })
          this.setState({ addToCart: 'Add To Cart' })
        })
    }
  }

  addToFav = () => {
    this.setState({ addToFav: 'Adding...' })
    let productCode = this.state.productCode
    let email = this.props.user.email

    if (!localStorage.getItem('token')) {
      cogoToast.warn('Please You have to Login First', {
        position: 'top-right',
      })
    } else {
      axios
        .get(AppURL.AddFavorite(productCode, email))
        .then((resp) => {
          if (resp.data === 1) {
            cogoToast.success('Product Is in Favorite', {
              position: 'top-right',
            })
            this.setState({ addToFav: 'Favouite' })
          } else {
            cogoToast.error('Your Request is not done ! Try Again', {
              position: 'top-right',
            })
            this.setState({ addToFav: 'Favorite' })
          }
        })
        .catch((error) => {
          cogoToast.error('Your Request is not done ! Try Again', {
            position: 'top-right',
          })
          this.setState({ addToFav: 'Favorite' })
        })
    }
  } // end ADD TO FAV

  colorOnChange = (event) => {
    let color = event.target.value
    // alert(color)
    this.setState({ color: color })
  }

  sizeOnChange = (event) => {
    let size = event.target.value
    // alert(size)
    this.setState({ size: size })
  }

  quantityOnChange = (event) => {
    let quantity = event.target.value
    this.setState({ quantity: quantity })
  }

  PageRefresh = () => {
    if (this.state.pageRefreshStatus === true) {
      let URL = window.location
      return <Redirect to={URL} />
    }
  }

  render() {
    let ProductAllData = this.props.data
    let title = ProductAllData.productList[0].title
    let brand = ProductAllData.productList[0].brand
    let category = ProductAllData.productList[0].category
    let subcategory = ProductAllData.productList[0].subcategory
    let image = ProductAllData.productList[0].image

    if (this.state.previewImg === '0') {
      this.setState({ previewImg: image })
    }

    let price = ProductAllData.productList[0].price
    let specialPrice = ProductAllData.productList[0].special_price
    let productCode = ProductAllData.productList[0].product_code
    let remark = ProductAllData.productList[0].remark
    let star = ProductAllData.productList[0].star

    let imageOne = ProductAllData.productDetails[0].image_one
    let imageTwo = ProductAllData.productDetails[0].image_two
    let imageThree = ProductAllData.productDetails[0].image_three
    let imageFour = ProductAllData.productDetails[0].image_four
    let color = ProductAllData.productDetails[0].color
    let size = ProductAllData.productDetails[0].size
    let productId = ProductAllData.productDetails[0].product_id
    let shortDescription = ProductAllData.productDetails[0].short_description
    let longDescription = ProductAllData.productDetails[0].long_description

    var ColorDiv = 'd-none'
    if (color != 'na') {
      let ColorArray = color.split(',')
      var ColorOption = ColorArray.map((ColorList, i) => (
        <option key={i} value={ColorList}>
          {ColorList}
        </option>
      ))
      ColorDiv = ''
    } else {
      ColorDiv = 'd-none'
    }

    var SizeDiv = 'd-none'
    if (size != 'na') {
      let SizeArray = size.split(',')
      var SizeOption = SizeArray.map((SizeList, i) => (
        <option key={i} value={SizeList}>
          {SizeList}
        </option>
      ))
      SizeDiv = ''
    } else {
      SizeDiv = 'd-none'
    }

    if (this.state.isSize === null) {
      if (size != 'na') {
        this.setState({ isSize: 'YES' })
      } else {
        this.setState({ isSize: 'NO' })
      }
    }

    if (this.state.isColor === null) {
      if (color != 'na') {
        this.setState({ isColor: 'YES' })
      } else {
        this.setState({ isColor: 'NO' })
      }
    }

    if (this.state.productCode === null) {
      this.setState({ productCode: productCode })
    }

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productcategory/${category}`}>{category}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productsubcategory/${category}/${subcategory}`}>
                  {subcategory}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productdetails/${productId}`}>{title}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <InnerImageZoom
                    className="detailimage"
                    zoomScale={1.8}
                    zoomType={'hover'}
                    src={this.state.previewImg}
                    zoomSrc={this.state.previewImg}
                  />

                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageOne}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageTwo}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageThree}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageFour}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name"> {title} </h5>
                  <h6 className="section-sub-title"> {shortDescription} </h6>

                  {specialPrice == 'na' ? (
                    <p className="product-price-on-card">Price : ${price}</p>
                  ) : (
                    <p className="product-price-on-card">
                      Price : <strike class="text-secondary">${price}</strike> $
                      {specialPrice}
                    </p>
                  )}

                  <h6 className="mt-2">
                    Category : <b>{category}</b>
                  </h6>

                  <h6 className="mt-2">
                    SubCategory : <b>{subcategory}</b>
                  </h6>

                  <h6 className="mt-2">
                    Brand : <b>{brand}</b>
                  </h6>

                  <h6 className="mt-2">
                    Product Code : <b>{productCode}</b>
                  </h6>

                  <div className={ColorDiv}>
                    <h6 className="mt-2"> Choose Color </h6>
                    <select
                      onChange={this.colorOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Color</option>
                      {ColorOption}
                    </select>
                  </div>

                  <div className={SizeDiv}>
                    <h6 className="mt-2"> Choose Size </h6>
                    <select
                      onChange={this.sizeOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Size</option>
                      {SizeOption}
                    </select>
                  </div>

                  <div className="">
                    <h6 className="mt-2"> Choose Quantity </h6>
                    <select
                      onChange={this.quantityOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Quantity</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="input-group mt-3">
                    <button
                      onClick={this.addToCart}
                      className="btn site-btn m-1 "
                    >
                      <i className="fa fa-shopping-cart"></i>
                      {this.state.addToCart}
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button
                      onClick={this.addToFav}
                      className="btn btn-primary m-1"
                    >
                      <i className="fa fa-heart"></i> {this.state.addToFav}
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p> {longDescription} </p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <ReviewList code={productCode} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProduct subcategory={subcategory} />
        {this.PageRefresh()}
      </Fragment>
    )
  }
}

export default ProductDetails
```

- `src/components/productDetails/ReviewList.jsx`を修正<br>

```jsx:Review.jsx
import axios from 'axios'
import React, { Component } from 'react'
import AppURL from '../../api/AppURL'

class ReviewList extends Component {
  constructor() {
    super()
    this.state = {
      ReviewData: [],
    }
  }

  componentDidMount() {
    let code = this.props.code

    axios
      .get(AppURL.ReviewList(code))
      .then((resp) => {
        console.log(resp.data)
        this.setState({ ReviewData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const MyList = this.state.ReviewData
    const MyView = MyList.map((ReviewList, i) =>
      ReviewList.reviewer_rating === '1' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : ReviewList.reviewer_rating === '2' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : ReviewList.reviewer_rating === '3' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : ReviewList.reviewer_rating === '4' ? (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ) : (
        <div key={i.toString()}>
          <p className=" p-0 m-0">
            <span className="Review-Title">{`${ReviewList.reviewer_name} `}</span>
            <span className="text-success">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </p>
          <p>{ReviewList.reviewer_comments}</p>
        </div>
      ),
    )
    return (
      <div>
        <h6 className="mt-2">REVIEWS</h6>
        {MyList.length > 0 ? <>{MyView}</> : <p>There have no review Yet </p>}
      </div>
    )
  }
}

export default ReviewList
```
