# Section28: Create and Consume Site Info Rest API

## 304 Create About Page

+ `src/pages/AboutPage.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import About from '../components/others/About'

class AboutPage extends Component {
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
        <About />
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

export default AboutPage
```

+ `src/components/others/About.jsx`コンポーネントを作成<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-tile-login">About Us Page</h4>
              <p className="section-title-contact">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
                teaching I am a founder of easy Learning and a passionate Web
                Developer, Programmer & Instructor.
                <br />
                <br />
                I am working online for the last 9 years and have created
                several successful websites running on the internet.
                <br />
                <br />
                I try to create a project-based course that helps you to learn
                professionally and make you fell as a complete developer. easy
                learning exists to help you succeed in life. Each course has
                been hand-tailored to teach a specific skill.
                <br />
                <br />I hope you agree! Whether you’re trying to learn a new
                skill from scratch or want to refresh your memory on something
                you’ve learned in the past, you’ve come to the right place.
                Education makes the world a better place. Make your world better
                with new skills.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
```

+ `src/route/AppRoute.jsx`を編集<br>

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
          <Route exact path="/about" component={AboutPage} /> // 追記
          <Route exact path="/productdetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/components/common/FooterDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFIECE ADDRESS</h5>
                <p>
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                  <br />
                  Email: Support@easylearningbd.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/about" className="footer-link"> // 編集
                  About Us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br />
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/purchase" className="footer-link">
                  How To Purchase
                </Link>
                <br />
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
                <br />
                <Link to="/refund" className="footer-link">
                  Refund Policy
                </Link>
                <br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a>
                  <img src={Google} />
                </a>
                <br />
                <a>
                  <img className="mt-2" src={Apple} />
                </a>
                <br></br>
                Change Your Language <br />
                <div id="google_translate_element"> </div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">
                  ©︎ Copyright 2021 by easy Shop, All Rights Reserved
                </h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop
```

## 306 Create Site Info API

+ `Laravel Project`を編集<br>


## 307 Consume Site Info API in Client Side Part1

+ `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = "http://localhost/api"
  static VisitorDetails = this.BaseURL + "/getvisitor"
  static PostContact = this.BaseURL + "/postcontact"
  static AllSiteInfo = this.BaseURL + "/allsiteinfo"
}

export default AppURL
```

+ `src/components/others/About.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'

class About extends Component {
  constructor() {
    super()
    this.state = {
      about: '',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((resp) => {
        let StatusCode = resp.status
        if (StatusCode == 200) {
          let JsonData = resp.data[0].about
          this.setState({ about: JsonData })
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
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              {this.state.about}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
```

## 308 Consume Site Info API in Client Side Part2

+ `$ npm install react-html-parser`を実行<br>

+ `src/components/others/About.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import ReactHtmlParser from 'react-html-parser'

class About extends Component {
  constructor() {
    super()
    this.state = {
      about: '',
    }
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((resp) => {
        let StatusCode = resp.status
        if (StatusCode == 200) {
          let JsonData = resp.data[0].about
          this.setState({ about: JsonData })
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
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              {ReactHtmlParser(this.state.about)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default About
```

+ `src/components/others/Purchase.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import AppURL from '../../api/AppURL'

class Purchase extends Component {
  constructor() {
    super()
    this.state = {
      parchase: '',
    }
  }

  componentDidMount() {
    axios.get(AppURL.AllSiteInfo).then((resp) => {
      let StatusCode = resp.status
      if (StatusCode == 200) {
        let JsonData = resp.data[0]['parchase_guide']
        this.setState({ parchase: JsonData })
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              {ReactHtmlParser(this.state.parchase)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Purchase
```

## 309 Consume Site Info API in Client Side Part3

+ `src/components/others/Purchase.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import AppURL from '../../api/AppURL'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Purchase extends Component {
  constructor() {
    super()
    this.state = {
      parchase: '',
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
            this.setState({ parchase: JsonData })

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
      this.setState({ purchase: SiteInfoPurchase })
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              {ReactHtmlParser(this.state.parchase)}
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

## 310 Consume Site Info API in Client Side Part4

+ `$ npm install placeholder-loading --save`を実行<br>

+ `src/assets/css/`ディレクトリに`placeholder-loading.min.css`を配置<br>

+ `src/index.js`を編集<br>

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/placeholder-loading.min.css'; // 追記

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

+ `src/components/others/About.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import ReactHtmlParser from 'react-html-parser'

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

+ `src/components/others/Purchase.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import AppURL from '../../api/AppURL'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
