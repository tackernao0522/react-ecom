# Section36: Create and Consume Search Rest API

## 351 Create Search API

+ `Laravel Project`を編集<br>

## 352 Consume Search API Part1

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
  static NotificationHistory = this.BaseURL + '/notification'
  static ProductBySearch(searchkey) {
    return this.BaseURL + '/search/' + searchkey
  }
}

export default AppURL
```

+ `src/pages/SearchPage.jsx`コンポーネントを作成<br>

+ `src/components/ProductDetails/SearchList.jsx`コンポーネントを作成

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
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
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/login" className="h4 btn">
                    LOGIN
                  </Link>
                  <Link to="/cart" className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Link>
                </Col>
              </Row>
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

## 353 Consume Search API Part2

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
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
  } // 追記

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
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/login" className="h4 btn">
                    LOGIN
                  </Link>
                  <Link to="/cart" className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Link>
                </Col>
              </Row>
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
import SearchPage from '../pages/SearchPage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} />} />
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />

          <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()} />} />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />
          <Route exact path="/favorite" render={(props) => <FavoritePage {...props} key={Date.now()} />} />
          <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} />} />
          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} />} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/pages/SearchPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'

class SearchPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <h1>Search Page</h1>
      </Fragment>
    )
  }
}

export default SearchPage
```

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
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
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/login" className="h4 btn">
                    LOGIN
                  </Link>
                  <Link to="/cart" className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Link>
                </Col>
              </Row>
              {this.searchRedirect()} // 追記
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

+ `src/pages/SearchPage.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SearchList from '../components/productDetails/SearchList'

class SearchPage extends Component {
  constructor({ match }) {
    super()
    this.state = {
      Searchkey: match.params.searchkey,
      ProductData: [],
    }
  }

  componentDidMount() {
    window.scroll(0, 0)
    axios
      .get(AppURL.ProductBySearch(this.state.Searchkey))
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
        <SearchList
          Searchkey={this.state.Searchkey}
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

export default SearchPage
```

## 354 Consume Search API Part3

+ `src/components/productDetails/SearchList.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SearchList extends Component {
  render() {
    const MyList = this.props.ProductData
    const Searchkey = this.props.Searchkey
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
        <Link className="text-link" to={`/productdetails/${ProductList.id}`}>
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
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/productbysearch/${Searchkey}`}>
                  Search For : {Searchkey}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="section-title text-center mb-40 mt-2">
            <h2>{Searchkey}</h2>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default SearchList
```
