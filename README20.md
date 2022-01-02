## 346 Consume Notification History API Part1

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
  static NotificationHistory = this.BaseURL + '/notification' // 追記
}

export default AppURL
```


+ `src/components/notification/Notification.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class Notification extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      NotificationData: [],
      isLoading: '',
      mainDiv: 'd-none',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount() {
    axios
      .get(AppURL.NotificationHistory)
      .then((resp) => {
        console.log(resp)
        this.setState({
          NotificationData: resp.data,
          isLoading: '',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    const NotificationList = this.state.NotificationData
    const MyView = NotificationList.map((NotificationList, i) => (
      <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
        <Card onClick={this.handleShow} className="notification-card">
          <Card.Body>
            <h6>{NotificationList.title}</h6>
            <p className="py-1  px-0 text-primary m-0">
              <i className="fa  fa-bell"></i> Date: {NotificationList.date}|
              Status: Unread
            </p>
            <Button className="btn btn-danger">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    ))
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{MyView}</Row>
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

## 347 Consume Notification History API Part2

+ `src/components/notification/Notification.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class Notification extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      NotificationData: [],
      isLoading: '',
      mainDiv: 'd-none',
      NotificationMsg: '',
      NotificationTitle: '',
      NotificationDate: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  componentDidMount() {
    axios
      .get(AppURL.NotificationHistory)
      .then((resp) => {
        console.log(resp)
        this.setState({
          NotificationData: resp.data,
          isLoading: 'd-none',
          mainDiv: '',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = (event) => {
    this.setState({ show: true })
    let Nmsg = event.target.getAttribute('data-message')
    let Ntitle = event.target.getAttribute('data-title')
    let Ndate = event.target.getAttribute('data-date')
    this.setState({
      NotificationMsg: Nmsg,
      NotificationTitle: Ntitle,
      NotificationDate: Ndate,
    })
  }

  render() {
    const NotificationList = this.state.NotificationData
    const MyView = NotificationList.map((NotificationList, i) => (
      <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
        <Card onClick={this.handleShow} className="notification-card">
          <Card.Body
            data-title={NotificationList.title}
            data-date={NotificationList.date}
            data-message={NotificationList.message}
          >
            <h6
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
            >
              {NotificationList.title}
            </h6>
            <p
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
              className="py-1  px-0 text-primary m-0"
            >
              <i className="fa  fa-bell"></i> Date: {NotificationList.date}|
              Status: Unread
            </p>
            <Button
              data-title={NotificationList.title}
              data-date={NotificationList.date}
              data-message={NotificationList.message}
              className="btn btn-danger"
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>{MyView}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date: {this.state.NotificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.NotificationTitle}</h6>
            <p>{this.state.NotificationMsg}</p>
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

## 348 Routing Update With Key

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
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

# Section35: Setup Breadcrumbs Navigation

## 349 Breadcrumbs Navigation Part1

+ `src/assets/css/typo.css`を編集<br>

```
.section-title {
  margin-top: 50px;
  margin-bottom: 50px;
  color: #051b35;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.section-title-contact {
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #051b35;
  font-weight: 400;
}
.section-title-login {
  margin-top: 50px;
  margin-bottom: 10px;
  color: #051b35;
  font-size: 30px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
}
.section-sub-title {
  color: #212121;
  font-size: 15px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
}
.product-name-on-card {
  color: #051b35;
  font-size: 16px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.product-price-on-card {
  color: #e43023;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
}
.category-name {
  color: #000000;
  font-size: 13px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
}
.text-link {
  color: inherit;
  text-decoration: inherit;
}
.breadbody {
  background-color: #e6e6e6;
  padding-top: 20px;
  padding-bottom: 7px;
  padding-left: 30px;
  font-weight: 600;
  border-radius: 10px;
}
```

+ `src/components/others/About.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'

class About extends Component {
  constructor() {
    super()
    this.state = {
      about: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((resp) => {
        let StatusCode = resp.status
        if (StatusCode == 200) {
          let JsonData = resp.data[0].about
          this.setState({ about: JsonData, loaderDiv: 'd-none', mainDiv: '' })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/about">About</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">About Us Page </h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.about)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
```

+ `src/components/others/Privacy.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'

class Privacy extends Component {
  constructor() {
    super()
    this.state = {
      privacy: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((resp) => {
        let StatusCode = resp.status
        if (StatusCode == 200) {
          let JsonData = resp.data[0].privacy
          this.setState({ privacy: JsonData, loaderDiv: 'd-none', mainDiv: '' })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/privacy">Privacy</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Privacy Page</h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.privacy)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Privacy
```

+ `src/components/others/Purchase.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import AppURL from '../../api/AppURL'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

class Purchase extends Component {
  constructor() {
    super()
    this.state = {
      purchase: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    }
  }

  componentDidMount() {
    let SiteInfoPurchase = sessionStorage.getItem('AllSiteInfo')

    if (SiteInfoPurchase == null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((resp) => {
          let StatusCode = resp.status
          if (StatusCode == 200) {
            let JsonData = resp.data[0]['parchase_guide']
            this.setState({
              purchase: JsonData,
              loaderDiv: 'd-none',
              mainDiv: '',
            })

            sessionStorage.setItem('SiteInfoPurchase', JsonData)
          } else {
            toast.error('Something Went Wrong', {
              position: 'bottom-center',
            })
          }
        })
        .catch((error) => {
          toast.error('Something Went Wrong', {
            position: 'bottom-center',
          })
        })
    } else {
      this.setState({
        purchase: SiteInfoPurchase,
        loaderDiv: 'd-none',
        mainDiv: '',
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
        <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/purchase">Purchase</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Purchase Page </h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.purchase)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Purchase
```

+ `src/components/others/Refund.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL'

class Refund extends Component {
  constructor() {
    super()
    this.state = {
      refund: '',
      loaderDiv: '',
      mainDiv: 'd-done',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((resp) => {
        let StatusCode = resp.status
        if (StatusCode == 200) {
          let JsonData = resp.data[0].refund
          this.setState({ refund: JsonData, loaderDiv: 'd-none', mainDiv: '' })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/refund">Refund</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Refund Page</h4>
                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.refund)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Refund
```
