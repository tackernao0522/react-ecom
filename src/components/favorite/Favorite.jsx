import axios from 'axios'
import cogoToast from 'cogo-toast'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class Favorite extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
      isLoading: '',
      mainDiv: 'd-none',
      PageRefreshStatus: false,
    }
  }

  componentDidMount() {
    window.scroll(0, 0)

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

  removeItem = (event) => {
    let product_code = event.target.getAttribute('data-code')
    let email = this.props.user.email

    axios
      .get(AppURL.FavoriteRemove(product_code, email))
      .then((res) => {
        cogoToast.success('Product Item Remove', { position: 'top-right' })
        this.setState({ PageRefreshStatus: true })
      })
      .catch((error) => {
        cogoToast.error('Your Request is not done ! Try Again', {
          postion: 'top-right',
        })
      })
  }

  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location
      return <Redirect to={URL} />
    }
  }

  render() {
    const FavList = this.state.ProductData
    const MyView = FavList.map((ProductList, i) => (
      <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
          <img className="center w-75" src={ProductList.image} />
          <Card.Body>
            <p className="product-name-on-card">{ProductList.product_name}</p>
            <Button
              onClick={this.removeItem}
              data-code={ProductList.product_code}
              className="btn btn-sm"
            >
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
        {this.PageRefresh()}
      </Fragment>
    )
  }
}

export default Favorite
