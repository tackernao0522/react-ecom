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