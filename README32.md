# 389 Product Cart Count Part1

- `Larvel Project`を編集<br>

# 390 Product Cart Count Part2

- `src/api/AppURL.jsx`を編集<br>

```jsx:AppURL.jsx
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
  static NotificationHistory = this.BaseURL + '/notification'
  static ProductBySearch(searchkey) {
    return this.BaseURL + '/search/' + searchkey
  }
  static UserLogin = this.BaseURL + '/login'
  static UserData = this.BaseURL + '/user'
  static UserRegister = `${this.BaseURL}/register`
  static UserForgetPassword = `${this.BaseURL}/forgetpassword`
  static UserResetPassword = `${this.BaseURL}/resetpassword`

  static SimilarProduct(code) {
    return `${this.BaseURL}/similar/${code}`
  }
  static ReviewList(code) {
    return `${this.BaseURL}/reviewlist/${code}`
  }
  static AddToCard = `${this.BaseURL}/addtocart`
  static CartCount(product_code) {
    return `${this.BaseURL}/cartcount/${product_code}`
  }
}

export default AppURL
```

- `src/assets/css/navMenuDesktop.css`を編集<br>

```css:navMenuDesktop.css
.nav-logo {
  width: 180px;
  height: 40px;
}
.cart-btn {
  padding: 5px 15px 5px 15px;
  color: #fafdfb;
  border-radius: 20px !important;
  border: 0.5px solid #051b35;
  background: #051b35 !important;
  text-decoration: none; // 追記
}
.navbar {
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  background-color: #ffffff !important;
  box-shadow: 0 0 8px 0 rgba(57, 78, 234, 0.1);
}

.TopSectionDown {
  margin-bottom: 80px;
}
```

- `src/components/productDetails/ProductDetails.jsx`を編集<br>

```jsx:ProductDetails.jsx
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import SuggestedProduct from './SuggestedProduct'
import ReviewList from './ReviewList'
import cogoToast from 'cogo-toast'
import AppURL from '../../api/AppURL'

class ProductDetails extends Component {
  constructor() {
    super()
    this.state = {
      previewImg: '0',
      isSize: null,
      isColor: null,
      color: '',
      size: '',
      quantity: '',
      productCode: null,
      addToCart: 'Add To Cart',
      pageRefreshStatus: false,
    }
    this.imgOnClick = this.imgOnClick.bind(this)
    this.colorOnChange = this.colorOnChange.bind(this)
    this.sizeOnChange = this.sizeOnChange.bind(this)
    this.quantityOnChange = this.quantityOnChange.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.PageRefresh = this.PageRefresh.bind(this)
  }

  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute('src')
    this.setState({ previewImg: imgSrc })
  }

  addToCart = () => {
    let isSize = this.state.isSize
    let isColor = this.state.isColor
    let color = this.state.color
    let size = this.state.size
    let quantity = this.state.quantity
    let productCode = this.state.productCode
    let email = this.props.user.email

    if (isColor === 'YES' && color.length === 0) {
      cogoToast.error('Please Select Color', { position: 'top-right' })
    } else if (isSize === 'YES' && size.length === 0) {
      cogoToast.error('Please Select Size', { position: 'top-right' })
    } else if (quantity.length === 0) {
      cogoToast.error('Please Select Quantity', { postion: 'top-right' })
    } else if (!localStorage.getItem('token')) {
      cogoToast.warn('Please You have to Login First', {
        position: 'top-right',
      })
    } else {
      this.setState({ addToCart: 'Adding...' })
      let MyFormData = new FormData()
      MyFormData.append('color', color)
      MyFormData.append('size', size)
      MyFormData.append('quantity', quantity)
      MyFormData.append('product_code', productCode)
      MyFormData.append('email', email)

      axios
        .post(AppURL.AddToCard, MyFormData)
        .then((resp) => {
          if (resp.data === 1) {
            cogoToast.success('Product Added Successfully', {
              position: 'top-right',
            })
            this.setState({ addToCart: 'Add To Cart' })
            this.setState({ pageRefreshStatus: true })
          } else {
            cogoToast.error('Your Request is not done! Try Again', {
              position: 'rop-right',
            })
            this.setState({ addToCart: 'Add To Cart' })
          }
        })
        .catch((error) => {
          cogoToast.error('Your Request is not done! Try Again', {
            position: 'rop-right',
          })
          this.setState({ addToCart: 'Add To Cart' })
        })
    }
  }

  colorOnChange = (event) => {
    let color = event.target.value
    // alert(color)
    this.setState({ color: color })
  }

  sizeOnChange = (event) => {
    let size = event.target.value
    // alert(size)
    this.setState({ size: size })
  }

  quantityOnChange = (event) => {
    let quantity = event.target.value
    this.setState({ quantity: quantity })
  }

  PageRefresh = () => {
    if (this.state.pageRefreshStatus === true) {
      let URL = window.location
      return <Redirect to={URL} />
    }
  }

  render() {
    let ProductAllData = this.props.data
    let title = ProductAllData.productList[0].title
    let brand = ProductAllData.productList[0].brand
    let category = ProductAllData.productList[0].category
    let subcategory = ProductAllData.productList[0].subcategory
    let image = ProductAllData.productList[0].image

    if (this.state.previewImg === '0') {
      this.setState({ previewImg: image })
    }

    let price = ProductAllData.productList[0].price
    let specialPrice = ProductAllData.productList[0].special_price
    let productCode = ProductAllData.productList[0].product_code
    let remark = ProductAllData.productList[0].remark
    let star = ProductAllData.productList[0].star

    let imageOne = ProductAllData.productDetails[0].image_one
    let imageTwo = ProductAllData.productDetails[0].image_two
    let imageThree = ProductAllData.productDetails[0].image_three
    let imageFour = ProductAllData.productDetails[0].image_four
    let color = ProductAllData.productDetails[0].color
    let size = ProductAllData.productDetails[0].size
    let productId = ProductAllData.productDetails[0].product_id
    let shortDescription = ProductAllData.productDetails[0].short_description
    let longDescription = ProductAllData.productDetails[0].long_description

    var ColorDiv = 'd-none'
    if (color != 'na') {
      let ColorArray = color.split(',')
      var ColorOption = ColorArray.map((ColorList, i) => (
        <option key={i} value={ColorList}>
          {ColorList}
        </option>
      ))
      ColorDiv = ''
    } else {
      ColorDiv = 'd-none'
    }

    var SizeDiv = 'd-none'
    if (size != 'na') {
      let SizeArray = size.split(',')
      var SizeOption = SizeArray.map((SizeList, i) => (
        <option key={i} value={SizeList}>
          {SizeList}
        </option>
      ))
      SizeDiv = ''
    } else {
      SizeDiv = 'd-none'
    }

    if (this.state.isSize === null) {
      if (size != 'na') {
        this.setState({ isSize: 'YES' })
      } else {
        this.setState({ isSize: 'NO' })
      }
    }

    if (this.state.isColor === null) {
      if (color != 'na') {
        this.setState({ isColor: 'YES' })
      } else {
        this.setState({ isColor: 'NO' })
      }
    }

    if (this.state.productCode === null) {
      this.setState({ productCode: productCode })
    }

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productcategory/${category}`}>{category}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productsubcategory/${category}/${subcategory}`}>
                  {subcategory}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productdetails/${productId}`}>{title}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <InnerImageZoom
                    className="detailimage"
                    zoomScale={1.8}
                    zoomType={'hover'}
                    src={this.state.previewImg}
                    zoomSrc={this.state.previewImg}
                  />

                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageOne}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageTwo}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageThree}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageFour}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name"> {title} </h5>
                  <h6 className="section-sub-title"> {shortDescription} </h6>

                  {specialPrice == 'na' ? (
                    <p className="product-price-on-card">Price : ${price}</p>
                  ) : (
                    <p className="product-price-on-card">
                      Price : <strike class="text-secondary">${price}</strike> $
                      {specialPrice}
                    </p>
                  )}

                  <h6 className="mt-2">
                    Category : <b>{category}</b>
                  </h6>

                  <h6 className="mt-2">
                    SubCategory : <b>{subcategory}</b>
                  </h6>

                  <h6 className="mt-2">
                    Brand : <b>{brand}</b>
                  </h6>

                  <h6 className="mt-2">
                    Product Code : <b>{productCode}</b>
                  </h6>

                  <div className={ColorDiv}>
                    <h6 className="mt-2"> Choose Color </h6>
                    <select
                      onChange={this.colorOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Color</option>
                      {ColorOption}
                    </select>
                  </div>

                  <div className={SizeDiv}>
                    <h6 className="mt-2"> Choose Size </h6>
                    <select
                      onChange={this.sizeOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Size</option>
                      {SizeOption}
                    </select>
                  </div>

                  <div className="">
                    <h6 className="mt-2"> Choose Quantity </h6>
                    <select
                      onChange={this.quantityOnChange}
                      className="form-control form-select"
                    >
                      <option>Choose Quantity</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="input-group mt-3">
                    <button
                      onClick={this.addToCart}
                      className="btn site-btn m-1 "
                    >
                      <i className="fa fa-shopping-cart"></i> {this.state.addToCart}
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p> {longDescription} </p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <ReviewList code={productId} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProduct subcategory={subcategory} />
        {this.PageRefresh()}
      </Fragment>
    )
  }
}

export default ProductDetails
```

- `src/components/common/NavMenuDesktop.jsx`を編集<br>

```jsx:NavMenuDesktop.jsx
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'
import axios from 'axios'
import AppURL from '../../api/AppURL'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
      cartCount: 0,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    let product_code = this.props.product_code
    console.log(product_code)
    axios
      .get(AppURL.CartCount(product_code))
      .then((resp) => {
        this.setState({ cartCount: resp.data })
      })
      .catch((error) => {})
  }

  logout = () => {
    localStorage.clear()
  }

  SearchOnChange(event) {
    let SearchKey = event.target.value
    // alert(SearchKey)
    this.setState({ SearchKey: SearchKey })
  }

  SearchOnClick() {
    if (this.state.SearchKey.length >= 2) {
      this.setState({ SearchRedirectStatus: true })
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Redirect to={`/productbysearch/${this.state.SearchKey}`} />
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose()
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose()
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState
    let ContentOverState = this.state.ContentOverState
    if (SideNavState === 'sideNavOpen') {
      this.setState({
        SideNavState: 'sideNavClose',
        ContentOverState: 'ContentOverlayClose',
      })
    } else {
      this.setState({
        SideNavState: 'sideNavOpen',
        ContentOverState: 'ContentOverlayOpen',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} className="navbar" bg="light">
            <Container
              fluid={'true'}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img
                    onClick={this.MenuBarClickHandler}
                    src={Bars}
                    className="bar-img"
                  />
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      onChange={this.SearchOnChange}
                      type="text"
                      className="form-control"
                    />
                    <Button
                      onClick={this.SearchOnClick}
                      type="button"
                      className="btn site-btn"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/favorite" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">3</span>
                    </sup>
                  </Link>
                  <Link to="/notification" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  {localStorage.getItem('token') ? (
                    <>
                      <Link to="/profile" className="h4 btn">
                        PROFILE
                      </Link>
                      <Link to="/" onClick={this.logout} className="h4 btn">
                        LOGOUT
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="h4 btn">
                        LOGIN
                      </Link>
                      <Link to="/register" className="h4 btn">
                        Register
                      </Link>
                    </>
                  )}
                  <Link to="/cart" className="cart-btn">
                    <i className="fa fa-shopping-cart"></i>
                    {this.state.cartCount} Items
                  </Link>
                </Col>
              </Row>
              {this.searchRedirect()}
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll />
        </div>
        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
```

## 391 Fixed Issues In Cart Count

- `src/components/common/NavMenuDesktop.jsx`を編集<br>

```jsx:NavMenuDesktop.jsx
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'
import axios from 'axios'
import AppURL from '../../api/AppURL'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
      cartCount: 0,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    let product_code = this.props.product_code
    console.log(product_code)
    axios
      .get(AppURL.CartCount(product_code))
      .then((resp) => {
        this.setState({ cartCount: resp.data })
      })
      .catch((error) => {})
  }

  logout = () => {
    localStorage.clear()
  }

  SearchOnChange(event) {
    let SearchKey = event.target.value
    // alert(SearchKey)
    this.setState({ SearchKey: SearchKey })
  }

  SearchOnClick() {
    if (this.state.SearchKey.length >= 2) {
      this.setState({ SearchRedirectStatus: true })
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Redirect to={`/productbysearch/${this.state.SearchKey}`} />
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose()
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose()
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState
    let ContentOverState = this.state.ContentOverState
    if (SideNavState === 'sideNavOpen') {
      this.setState({
        SideNavState: 'sideNavClose',
        ContentOverState: 'ContentOverlayClose',
      })
    } else {
      this.setState({
        SideNavState: 'sideNavOpen',
        ContentOverState: 'ContentOverlayOpen',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} className="navbar" bg="light">
            <Container
              fluid={'true'}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img
                    onClick={this.MenuBarClickHandler}
                    src={Bars}
                    className="bar-img"
                  />
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      onChange={this.SearchOnChange}
                      type="text"
                      className="form-control"
                    />
                    <Button
                      onClick={this.SearchOnClick}
                      type="button"
                      className="btn site-btn"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/favorite" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">3</span>
                    </sup>
                  </Link>
                  <Link to="/notification" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  {localStorage.getItem('token') ? (
                    <>
                      <Link to="/profile" className="h4 btn">
                        PROFILE
                      </Link>
                      <Link to="/" onClick={this.logout} className="h4 btn">
                        LOGOUT
                      </Link>
                      <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i>
                        {` ${this.state.cartCount} Items`}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="h4 btn">
                        LOGIN
                      </Link>
                      <Link to="/register" className="h4 btn">
                        Register
                      </Link>
                      <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> {` 0 Item`}
                      </Link>
                    </>
                  )}
                </Col>
              </Row>
              {this.searchRedirect()}
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll />
        </div>
        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
```
