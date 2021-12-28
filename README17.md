# Section30: Create and Counsume Product List Rest API

## 319 Create Product List API Part1

+ `Laravel Project`を編集<br>

## 321 Consume Product List API Part1

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
  static Productlistbysubcategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    )
  }
}

export default AppURL
```

+ `src/components/home/FeaturedProducts.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class FeaturedProducts extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('FEATURED'))
      .then((resp) => {
        this.setState({ ProductData: resp.data })
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
        <Link to="/productdetails">
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
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
```

## 322 Consume Product List API Part2

+ `src/components/Collection.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class Collection extends Component {
  constructor() {
    super()
    this.state = {
      ProductData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('COLLECTION'))
      .then((resp) => {
        this.setState({ ProductData: resp.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const CollectionList = this.state.ProductData
    const MyView = CollectionList.map((CollectionList, i) => (
      <Col
        key={i.toString()}
        className="p-0"
        xl={3}
        lg={3}
        md={3}
        sm={6}
        xs={6}
      >
        <Card className="image-box card w-100">
          <img className="center w-75" src={CollectionList.image} />
          <Card.Body>
            <p className="product-name-on-card">{CollectionList.title}</p>
            {CollectionList.special_price == 'na' ? (
              <p className="product-price-on-card">
                Price : ${CollectionList.price}
              </p>
            ) : (
              <p className="product-price-on-card">
                {`Price : `}
                <strike>${`${CollectionList.price} `}</strike>$
                {CollectionList.special_price}
              </p>
            )}
          </Card.Body>
        </Card>
      </Col>
    ))

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> PRODUCT COLLECTION</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collection
```

## 323 Consume Product List API Part3

+ `src/components/home/NewArrival.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'
import AppURL from '../../api/AppURL'

class NewArrival extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.state = {
      ProductData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('NEW'))
      .then((resp) => {
        this.setState({ ProductData: resp.data })
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
        <Card className="image-box card">
          <img className="center" src={NewList.image} />
          <Card.Body>
            <p className="product-name-on-card">{NewList.title}</p>
            {NewList.special_price == 'na' ? (
              <p className="product-price-on-card">Price : ${NewList.price}</p>
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
      </div>
    ))

    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default NewArrival
```

## 324 Create Product List API

+ `src/pages/ProductCategoryPage.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/productDetails/Category'

class ProductCategoryPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
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
        <Category />
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
```

+ `src/components/productDetails/Category.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'

class Category extends Component {
  render() {
    return (
      <Fragment>

      </Fragment>
    )
  }
}

export default Category
```

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
          <Route exact path="/productdetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/productcategory/:category" component={ProductCategoryPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/home/Categories.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class Categories extends Component {
  constructor() {
    super()
    this.state = {
      MenuData: [],
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((resp) => {
        this.setState({ MenuData: resp.data })
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
        <Link to={`/productcategory/${CatList.category_name}`}>
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
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Row>{MyView}</Row>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories
```

+ `src/pages/ProductCategoryPage.jsx`を編集<br>

```
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
```

## 325 Consume Product List API Part1

+ `src/components/productDetails/Category.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

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
                <strike className="text-secondary">${`${ProductList.price} `}</strike>$
                {ProductList.special_price}
              </p>
            )}
          </Card.Body>
        </Card>
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
