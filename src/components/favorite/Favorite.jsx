import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class Favorite extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.FavoriteList(this.props.user.email))
      .then((res) => {
        this.setState({
          ProductData: res.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const FavList = this.state.ProductData
    const MyView = FavList.map((ProductList, i) => (
      <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
          <img className="center w-75" src={ProductList.image} />
          <Card.Body>
            <p className="product-name-on-card">{ProductList.product_name}</p>
            <Button className="btn btn-sm">
              <i className="fa fa-trash-alt"></i> Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>MY FAVORITE ITEMS</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default Favorite
