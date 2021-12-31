import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SliderLoading from '../components/placeholder/SliderLoading'
import ProductDetails from '../components/productDetails/ProductDetails'
import SuggestedProduct from '../components/productDetails/SuggestedProduct'

class ProductDetailsPage extends Component {
  constructor({ match }) {
    super()
    this.state = {
      Code: match.params.code,
      ProductData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    window.scroll(0, 0)
    axios
      .get(AppURL.ProductDetails(this.state.Code))
      .then((resp) => {
        this.setState({
          ProductData: resp.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
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
        {this.state.mainDiv == 'd-none' ? (
          <SliderLoading isLoading={this.state.isLoading} />
        ) : (
          <>
            <ProductDetails data={this.state.ProductData} />
            <SuggestedProduct />
          </>
        )}
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

export default ProductDetailsPage