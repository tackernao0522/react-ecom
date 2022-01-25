# Section46: Other Options Setup

## 418 Order Now Option

- `src/components/productDetails/ProductDetails.jsx`を編集<br>

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
      orderNow: 'Order Now',
      PageRedirectStauts: false,
    }
    this.imgOnClick = this.imgOnClick.bind(this)
    this.colorOnChange = this.colorOnChange.bind(this)
    this.sizeOnChange = this.sizeOnChange.bind(this)
    this.quantityOnChange = this.quantityOnChange.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.PageRefresh = this.PageRefresh.bind(this)
    this.addToFav = this.addToFav.bind(this)
    this.orderNow = this.orderNow.bind(this)
    this.PageRedirect = this.PageRedirect.bind(this)
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

  orderNow = () => {
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
      cogoToast.error('Please Select Quantity', { position: 'top-right' })
    } else if (!localStorage.getItem('token')) {
      cogoToast.warn('Please You have to Login First', {
        position: 'top-right',
      })
    } else {
      this.setState({ orderNow: 'Adding...' })
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
            this.setState({ orderNow: 'Order Now' })
            this.setState({ PageRedirectStauts: true })
          } else {
            cogoToast.error('Your Request is not done ! Try Again', {
              position: 'top-right',
            })
            this.setState({ addToCart: 'Add To Cart' })
          }
        })
        .catch((error) => {
          cogoToast.error('Your Request is not done ! Try Again', {
            position: 'top-right',
          })
          this.setState({ addToCart: 'Add To Cart' })
        })
    }
  }

  PageRedirect = () => {
    if (this.state.PageRedirectStauts === true) {
      return <Redirect to="/cart" />
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
                    <button
                      onClick={this.orderNow}
                      className="btn btn-primary m-1"
                    >
                      <i className="fa fa-car"></i> {this.state.orderNow}
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
        {this.PageRedirect()}
      </Fragment>
    )
  }
}

export default ProductDetails
```

## 419 Protect URL

- `src/components/notification/Notification.jsx`を編集<br>

```jsx:Notification.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class Notification extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      NotificationData: [],
      isLoading: '',
      mainDiv: 'd-none',
      NotificationMsg: '',
      NotificationTitle: '',
      NotificationDate: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount() {
    axios
      .get(AppURL.NotificationHistory)
      .then((resp) => {
        console.log(resp)
        this.setState({
          NotificationData: resp.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
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
      NotificationMsg: Nmsg,
      NotificationTitle: Ntitle,
      NotificationDate: Ndate,
    })
  }

  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    } // 追記

    const NotificationList = this.state.NotificationData
    const MyView = NotificationList.map((NotificationList, i) => (
      <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
        <Card onClick={this.handleShow} className="notification-card">
          <Card.Body
            data-title={NotificationList.title}
            data-date={NotificationList.date}
            data-message={NotificationList.message}
          >
            <h6
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
            >
              {NotificationList.title}
            </h6>
            <p
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
              className="py-1  px-0 text-primary m-0"
            >
              <i className="fa  fa-bell"></i> Date: {NotificationList.date}| Status:
              Unread
            </p>
            <Button
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
              className="btn btn-danger"
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{MyView}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date: {this.state.NotificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.NotificationTitle}</h6>
            <p>{this.state.NotificationMsg}</p>
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

export default Notification
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
      PageRedirectStaus: false,
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
    this.PageRedirect = this.PageRedirect.bind(this)
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

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location
      return <Redirect to={URL} />
    }
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
      cogoToast.error('Please Select Payment', { position: 'top-right' })
    } else if (name.length === 0) {
      cogoToast.error('Please Select Your Name', { position: 'top-right' })
    } else if (address.length === 0) {
      cogoToast.error('Please Select Your Address', { position: 'top-right' })
    } else {
      let invoice = new Date().getTime()
      let MyFormData = new FormData()
      MyFormData.append('city', city)
      MyFormData.append('payment_method', payment)
      MyFormData.append('name', name)
      MyFormData.append('delivery_address', address)
      MyFormData.append('email', email)
      MyFormData.append('invoice_no', invoice)
      MyFormData.append('delivery_charge', '00')

      axios
        .post(AppURL.CartOrder, MyFormData)
        .then((res) => {
          if (res.data === 1) {
            cogoToast.success('Order Request Received', {
              position: 'top-right',
            })
            this.setState({ PageRedirectStaus: true })
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

  PageRedirect = () => {
    if (this.state.PageRedirectStaus === true) {
      return <Redirect to="/orderlist" />
    }
  }

  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    } // 追記

    const CartList = this.state.CartListData
    let totalPriceSum = 0
    const MyView = CartList.map((CartList, i) => {
      totalPriceSum = totalPriceSum + parseInt(CartList.total_price)
      return (
        <Col key={i.toString()} className="p-1" lg={12} md={12} sm={12} xs={12}>
          <div>
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
          </div>
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
        {this.PageRedirect()}
      </Fragment>
    )
  }
}

export default Cart
```

- `src/components/cart/OrderList.jsx`を編集<br>

```jsx:OrderList.jsx
import axios from 'axios'
import cogoToast from 'cogo-toast'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
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
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    } // 追記

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

# Section47: Backend Admin Panel Setup

## 421 Setup Admin Theme

- `Laravel Project`を編集<br>
