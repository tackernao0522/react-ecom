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
