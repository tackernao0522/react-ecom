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

## 339 Consume Product Details API Part2

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PrivacyPage from '../pages/PrivacyPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'
import PurchasePage from '../pages/PurchasePage'
import RefundPage from '../pages/RefundPage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/productdetails/:code" component={ProductDetailsPage} /> // 編集
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/productcategory/:category" component={ProductCategoryPage} />
          <Route exact path="/productsubcategory/:category/:subcategory" component={ProductSubCategoryPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/home/FeaturedProducts.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'
import FeaturedLoading from '../placeholder/FeaturedLoading'

class FeaturedProducts extends Component {
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
      .get(AppURL.ProductListByRemark('FEATURED'))
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
    const FeaturedList = this.state.ProductData
    const MyView = FeaturedList.map((FeaturedList, i) => (
      <Col
        key={i.toString()}
        className="p-1"
        key={1}
        xl={2}
        lg={2}
        md={2}
        sm={4}
        xs={6}
      >
        <Link to={`/productdetails/${FeaturedList.id}`}>
          <Card className="image-box card">
            <img className="center" src={FeaturedList.image} />
            <Card.Body>
              <p className="product-name-on-card">{FeaturedList.title}</p>
              {FeaturedList.special_price == 'na' ? (
                <p className="product-price-on-card">
                  Price : ${FeaturedList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  {`Price : `}
                  <strike className="text-secondary">
                    ${`${FeaturedList.price} `}
                  </strike>
                  ${FeaturedList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))

    return (
      <Fragment>
        <FeaturedLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>FEATURED PRODUCT</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FeaturedProducts
```

+ `src/components/home/NewArrival.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import AppURL from '../../api/AppURL'
import NewArrivalLoading from '../placeholder/NewArrivalLoading'
import { Link } from 'react-router-dom'

class NewArrival extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.state = {
      ProductData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('NEW'))
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

  next() {
    this.slider.slickNext()
  }

  previous() {
    this.slider.slickPrev()
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    const NewList = this.state.ProductData
    const MyView = NewList.map((NewList, i) => (
      <div key={i.toString()}>
        <Link to={`/productdetails/${NewList.id}`}>
          <Card className="image-box card">
            <img className="center" src={NewList.image} />
            <Card.Body>
              <p className="product-name-on-card">{NewList.title}</p>
              {NewList.special_price == 'na' ? (
                <p className="product-price-on-card">
                  Price : ${NewList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  {`Price : `}
                  <strike className="text-secondary">
                    ${`${NewList.price} `}
                  </strike>
                  ${NewList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </div>
    ))

    return (
      <Fragment>
        <NewArrivalLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>
                NEW ARRIVAL &nbsp;
                <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                  <i className="fa fa-angle-left"></i>
                </a>
                &nbsp;
                <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                  <i className="fa fa-angle-right"></i>
                </a>
              </h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {MyView}
              </Slider>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default NewArrival
```

+ `src/components/ProductDetails/Category.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const MyList = this.props.ProductData
    const Category = this.props.Category
    const MyView = MyList.map((ProductList, i) => (
      <Col
        key={i.toString()}
        className="p-0"
        xl={3}
        lg={3}
        md={3}
        sm={6}
        xs={6}
      >
        <Link to={`/productdetails/${ProductList.id}`}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={ProductList.image} />
            <Card.Body>
              <p className="product-name-on-card">{ProductList.title}</p>
              {ProductList.special_price == 'na' ? (
                <p className="product-price-on-card">
                  Price : ${ProductList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  {`Price : `}
                  <strike className="text-secondary">
                    ${`${ProductList.price} `}
                  </strike>
                  ${ProductList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))

    return (
      <Fragment>
        <Container className="text-center">
          <div className="section-title text-center mb-55">
            <h2>{Category}</h2>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default Category
```

+ `src/components/productsDetails/SubCategory.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SubCategory extends Component {
  render() {
    const MyList = this.props.ProductData
    const Category = this.props.Category
    const SubCategory = this.props.SubCategory
    const MyView = MyList.map((ProductList, i) => (
      <Col
        key={i.toString()}
        className="p-0"
        xl={3}
        lg={3}
        md={3}
        sm={6}
        xs={6}
      >
        <Link to={`/productdetails/${ProductList.id}`}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={ProductList.image} />
            <Card.Body>
              <p className="product-name-on-card">{ProductList.title}</p>
              {ProductList.special_price == 'na' ? (
                <p className="product-price-on-card">
                  Price : ${ProductList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  {`Price : `}
                  <strike className="text-secondary">
                    ${`${ProductList.price} `}
                  </strike>
                  ${ProductList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ))

    return (
      <Fragment>
        <Container className="text-center">
          <div className="section-title text-center mb-55">
            <h2>
              {Category} / {SubCategory}
            </h2>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default SubCategory
```

## 340 Consume Product Details API Part3

+ `src/components/productDetials`を`src/components/productDetails`とファイル名を修正<br>

```
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
            <ProductDetails data={this.state.ProductData} /> // 修正
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

+ `src/pages/ProductDetailsPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class ProductDetials extends Component {
  render() {
    let ProductAllData = this.props.data
    let title = ProductAllData.productList[0].title
    let brand = ProductAllData.productList[0].brand
    let category = ProductAllData.productList[0].category
    let subcategory = ProductAllData.productList[0].subcategory
    let image = ProductAllData.productList[0].image
    let price = ProductAllData.productList[0].price
    let specialPrice = ProductAllData.productList[0].special_price
    let productCode = ProductAllData.productList[0].product_code
    let remark = ProductAllData.productList[0].remark
    let star = ProductAllData.productList[0].star

    let imageAne = ProductAllData.productDetails[0].image_one
    let imageTwo = ProductAllData.productDetails[0].image_two
    let imageThree = ProductAllData.productDetails[0].image_three
    let imageFour = ProductAllData.productDetails[0].image_four
    let color = ProductAllData.productDetails[0].color
    let size = ProductAllData.productDetails[0].size
    let productId = ProductAllData.productDetails[0].product_id
    let shortDescription = ProductAllData.productDetails[0].short_description
    let longDescription = ProductAllData.productDetails[0].long_description

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
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
                  <img className="w-100" src={imageAne} />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageAne} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageTwo} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageThree} />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img className="w-100" src={imageFour} />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{shortDescription}</h6>
                  <div className="input-group">
                    <div className="Product-price-card d-inline ">
                      Reguler Price ${price}
                    </div>
                    <div className="Product-price-card d-inline ">
                      50% Discount
                    </div>
                    <div className="Product-price-card d-inline ">
                      New Price ${specialPrice}
                    </div>
                  </div>
                  <h6 className="mt-2">Category : <b>{category}</b></h6>

                  <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>

                  <h6 className="mt-2">Brand : <b>{brand}</b></h6>

                  <h6 className="mt-2">Product Code : <b>{productCode}</b></h6>

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {' '}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {' '}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {' '}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>{longDescription}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProductDetials
```

## 341 Consume Product Details API Part4

+ src/assets/css/productDetails.css`を編集<br>

```
.Product-Name {
  color: #212121;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.Product-price-card {
  padding: 10px;
  margin: 2px;
  border: 0.5px solid #c8c8c8;
}

.Review-Title {
  color: #e43023;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}

.bigimage {
  height: 400px;
  margin-left: 200px;
}

.smallimage {
  height: 100px;
}

.product-sm-img:hover {
  cursor: pointer;
}
```

+ `src/components/productDetails/ProductDetails.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import reactDom from 'react-dom'

class ProductDetials extends Component {
  constructor() {
    super()
    this.imgOnClick = this.imgOnClick.bind(this)
  }

  imgOnClick(event) {
    let imgSrc = event.target.getAttribute('src')
    let previewImg = document.getElementById('previewImg')
    reactDom.findDOMNode(previewImg).setAttribute('src', imgSrc)
  }

  render() {
    let ProductAllData = this.props.data
    let title = ProductAllData.productList[0].title
    let brand = ProductAllData.productList[0].brand
    let category = ProductAllData.productList[0].category
    let subcategory = ProductAllData.productList[0].subcategory
    let image = ProductAllData.productList[0].image
    let price = ProductAllData.productList[0].price
    let specialPrice = ProductAllData.productList[0].special_price
    let productCode = ProductAllData.productList[0].product_code
    let remark = ProductAllData.productList[0].remark
    let star = ProductAllData.productList[0].star

    let imageAne = ProductAllData.productDetails[0].image_one
    let imageTwo = ProductAllData.productDetails[0].image_two
    let imageThree = ProductAllData.productDetails[0].image_three
    let imageFour = ProductAllData.productDetails[0].image_four
    let color = ProductAllData.productDetails[0].color
    let size = ProductAllData.productDetails[0].size
    let productId = ProductAllData.productDetails[0].product_id
    let shortDescription = ProductAllData.productDetails[0].short_description
    let longDescription = ProductAllData.productDetails[0].long_description

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
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
                  <img id="previewImg" className="bigimage" src={imageAne} />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imgOnClick}
                          className="w-100 smallimage product-sm-img"
                          src={imageAne}
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
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{shortDescription}</h6>
                  <div className="input-group">
                    <div className="Product-price-card d-inline ">
                      Reguler Price ${price}
                    </div>
                    <div className="Product-price-card d-inline ">
                      50% Discount
                    </div>
                    <div className="Product-price-card d-inline ">
                      New Price ${specialPrice}
                    </div>
                  </div>
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

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {' '}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {' '}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {' '}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>{longDescription}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProductDetials
```

## 342 Consume Product Details API Part5

+ `src/components/productDetails/ProductDetails.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import reactDom from 'react-dom'

class ProductDetails extends Component {
  constructor() {
    super()
  }

  imgOnClick(event) {
    let imgSrc = event.target.getAttribute('src')
    let previewImg = document.getElementById('previewImg')
    reactDom.findDOMNode(previewImg).setAttribute('src', imgSrc)
  }

  render() {
    let ProductAllData = this.props.data
    let title = ProductAllData.productList[0].title
    let brand = ProductAllData.productList[0].brand
    let category = ProductAllData.productList[0].category
    let subcategory = ProductAllData.productList[0].subcategory
    let image = ProductAllData.productList[0].image
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

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
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
                  <img id="previewImg" className="bigimage" src={imageOne} />
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
                  <div className="input-group">
                    <div className="Product-price-card d-inline ">
                      Reguler Price ${price}
                    </div>
                    <div className="Product-price-card d-inline ">
                      50% Discount
                    </div>
                    <div className="Product-price-card d-inline ">
                      New Price ${specialPrice}
                    </div>
                  </div>
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
                    <select className="form-control form-select">
                      <option>Choose Color</option>
                      {ColorOption}
                    </select>
                  </div>

                  <div className={SizeDiv}>
                    <h6 className="mt-2"> Choose Size </h6>
                    <select className="form-control form-select">
                      <option>Choose Size</option>
                      {SizeOption}
                    </select>
                  </div>

                  <div className="">
                    <h6 className="mt-2"> Choose Quantity </h6>
                    <select className="form-control form-select">
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
                    <button className="btn site-btn m-1 ">
                      <i className="fa fa-shopping-cart"></i> Add To Cart
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
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">Kazi Ariyan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProductDetails
```

## 343 Consume Product Details API Part6
