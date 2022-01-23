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
