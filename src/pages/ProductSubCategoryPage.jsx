import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SubCategory from '../components/productDetails/SubCategory'

class ProductSubCategoryPage extends Component {
  constructor({ match }) {
    super()
    this.state = {
      Category: match.params.category,
      SubCategory: match.params.subcategory,
      ProductData: [],
    }
  }

  componentDidMount() {
    window.scroll(0, 0)
    // alert(this.state.SubCategory);
    axios
      .get(AppURL.ProductlistBySubcategory(this.state.Category, this.state.SubCategory))
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
        <SubCategory
          Category={this.state.Category}
          SubCategory={this.state.SubCategory}
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

export default ProductSubCategoryPage
