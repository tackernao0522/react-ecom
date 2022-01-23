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
