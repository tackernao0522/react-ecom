import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import CategoryLoading from '../placeholder/CategoryLoading'

class Categories extends Component {
  constructor() {
    super()
    this.state = {
      MenuData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((resp) => {
        this.setState({ MenuData: resp.data, isLoading: 'd-none', mainDiv: '' })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const CatList = this.state.MenuData
    const MyView = CatList.map((CatList, i) => (
      <Col
        key={i.toString()}
        className="p-0"
        key={1}
        xl={2}
        lg={2}
        md={2}
        sm={6}
        xs={6}
      >
        <Link className='text-link' to={`/productcategory/${CatList.category_name}`}>
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img className="center" src={CatList.category_image} />
              <h5 className="category-name">{CatList.category_name}</h5>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))

    return (
      <Fragment>
        <CategoryLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>CATEGORIES</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>
              <Row>{MyView}</Row>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default Categories
