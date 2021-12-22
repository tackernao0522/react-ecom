## 289 Notification Page

+ `src/pages/NotificationPage.jsx`コンポーネントを作成<br>

+ `src/components/notification`ディレクトリを作成<br>

+ `src/components/notification/Notification.jsx`コンポーネントを作成<br>

+ `src/pages/NotificationPage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Notification from '../components/notification/Notification'

class NotificationPage extends Component {
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
        <Notification />
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

export default NotificationPage
```

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PrivacyPage from '../pages/PrivacyPage'
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
          <Route exact path="/productdetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} /> // 追記
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import MegaMenuAll from '../home/MegaMenuAll'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
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
                  <Button onClick={this.MenuBarClickHandler} className="btn">
                    <i className="fa fa-bars"></i>
                  </Button>
                  <Link to="/">
                    <img className="nav-logo" src={Logo} />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input type="text" className="form-control" />
                    <Button type="button" className="btn site-btn">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">3</span>
                    </sup>
                  </Link>
                  <Link to="/notification" className="btn"> // 追記
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
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Button>
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

+ `src/assets/css/notification.css`ファイルを作成<br>

```
.notification-card {
  cursor: pointer !important;
}
```

+ `src/assets/css/custom.css`を編集<br>

```
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto+Condensed:ital,wght@0,400;0,700;1,300&display=swap');

@import 'bigSlider.css';
@import 'button.css';
@import 'card.css';
@import 'footer.css';
@import 'megaMenu.css';
@import 'navMenuDesktop.css';
@import 'navMenuMobile.css';
@import 'typo.css';
@import 'megaMenuMobile.css';
@import 'responsive.css';
@import 'megaMenuAll.css';
@import 'onboard.css';
@import 'common.css';
@import 'productDetails.css';
@import 'notification.css';

body {
  background-color: #ffffff;
}
```

+ `src/components/notification/Notification.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'

class Notification extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }
  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                  <p className="py-1  px-0 text-primary m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Unread
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
              <Card onClick={this.handleShow} className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                  <p className="py-1   px-0 text-primary m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Unread
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                  <p className="py-1  px-0 text-success m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card className="notification-card">
                <Card.Body>
                  <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                  <p className="py-1  px-0 text-success m-0">
                    <i className="fa fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                  <p className="py-1  px-0 text-success m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
              <Card className="notification-card">
                <Card.Body>
                  <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                  <p className="py-1 px-0 text-success m-0">
                    <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:11/05/2021
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>Woohoo, you're reading this text in a modal!</h6>
            <p>
              Each course has been hand-tailored to teach a specific skill. I
              hope you agree! Whether you’re trying to learn a new skill from
              scratch or want to refresh your memory on something you’ve learned
              in the past, you’ve come to the right place.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default Notification
```

## 290 Favorite Items Page

+ `src/pages/FavoritePage.jsx`コンポーネントを作成<br>

+ `src/components/favorite`ディレクトリを作成<br>

+ `src/components/favorite/Favorite.jsx`コンポーネントを作成<br>

+ `src/pages/FavoritePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Favorite from '../components/favorite/Favorite'

class FavoritePage extends Component {
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
        <Favorite />
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

export default FavoritePage
```

+ `src/components/favorite/Favorite.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class Favorite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>MY FAVORITE ITEMS</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Striped Men Hooded Neck Red
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Striped Men Round Neck Maroon, Grey
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/jt4olu80/t-shirt/v/7/v/xl-t-shirt-0068-eg-original-imafejrfpzjkxvkq.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Color Block Men Round Neck Grey
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kljrvrk0/t-shirt/q/r/0/l-trdhdful-d32-tripr-original-imagynnpg2fh62ht.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Favorite
```

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import ContactPage from '../pages/ContactPage'
import FavoritePage from '../pages/FavoritePage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PrivacyPage from '../pages/PrivacyPage'
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
          <Route exact path="/productdetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favorite" component={FavoritePage} /> // 追記
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/common/NavMenuDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

class Favorite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>MY FAVORITE ITEMS</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Striped Men Hooded Neck Red
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Striped Men Round Neck Maroon, Grey
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/jt4olu80/t-shirt/v/7/v/xl-t-shirt-0068-eg-original-imafejrfpzjkxvkq.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Color Block Men Round Neck Grey
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src="https://rukminim1.flixcart.com/image/800/960/kljrvrk0/t-shirt/q/r/0/l-trdhdful-d32-tripr-original-imagynnpg2fh62ht.jpeg?q=50"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Printed Men Hooded Neck Red T-Shirt
                  </p>
                  <p className="product-price-on-card">Price : $120</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"></i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Favorite
```
