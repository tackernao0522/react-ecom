## 338 Consume Product Details API Part1

+ `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = 'http://localhost/api'
  static VisitorDetails = this.BaseURL + '/getvisitor'
  static AllSiteInfo = this.BaseURL + '/allsiteinfo'
  static AllCategoryDetails = this.BaseURL + '/allcategory'
  static ProductListByRemark(remark) {
    return this.BaseURL + '/productlistbyremark/' + remark
  }
  static ProductListByCategory(category) {
    return this.BaseURL + '/productlistbycategory/' + category
  }
  static ProductlistBySubcategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    )
  }
  static AllSlider = this.BaseURL + '/allslider'
  static ProductDetails(code) {
    return this.BaseURL + '/productdetails/' + code
  }
}

export default AppURL
```

+ `src/pages/ProductDetailsPage.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SliderLoading from '../components/placeholder/SliderLoading'
import ProductDetials from '../components/productDetails/ProductDetials'
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
            <ProductDetials data={this.state.ProductData} />
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
```