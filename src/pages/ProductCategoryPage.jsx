import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/productDetails/Category'

class ProductCategoryPage extends Component {
  constructor({ match }) {
    super()
    this.state = {
      Category: match.params.category,
      ProductData: [],
    }
  }

  componentDidMount() {
    window.scroll(0, 0)
    // alert(this.state.Category);
    axios
      .get(AppURL.ProductListByCategory(this.state.Category))
      .then((resp) => {
        this.setState({ ProductData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Category
          Category={this.state.Category}
          ProductData={this.state.ProductData}
        />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default ProductCategoryPage
