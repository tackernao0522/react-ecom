## 291 Update Nave Menu Icon

+ `src/assets/images/`ディレクトリに`bars.png`を配置する<br>

+ `src/assets/css/card.css`を編集<br>

```
.card {
  width: 100% !important;
  text-decoration: none;
  border: none !important;
  border-radius: 0% !important;
  box-shadow: 0 0 4px 0 rgba(57, 78, 234, 0.1);
}
.card:hover {
  border-radius: 0% !important;
  text-decoration: none;
  box-shadow: 0 0 12px 0 rgba(57, 78, 234, 0.1);
}

.bar-img { // 追記
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100% !important;
}
.image-box img {
  width: 150px !important;
  transition: all 0.3s;
  display: block;
  height: 250px !important;
  transform: scale(1);
}
.image-box:hover img {
  transform: scale(1.1);
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.section-title h2 {
  font-size: 30px;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin: 0;
}

.section-title h2:before {
  position: absolute;
  top: 17px;
  left: -100px;
  width: 80px;
  height: 2px;
  content: '';
  background-color: #000;
}

.section-title h2:after {
  position: absolute;
  top: 17px;
  right: -100px;
  width: 80px;
  height: 2px;
  content: '';
  background-color: #000;
}
```

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
                  <img onClick={this.MenuBarClickHandler} src={Bars} className='bar-img' /> // 編集
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

## 293 Multiple language option

+ `public/index.html`を編集<br>

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="application-name" content="Easy Express">
  <meta name="apple-mobile-web-app-title" content="Easy Express">
  <meta name="theme-color" content="#002e62">
  <meta name="msapplication-navbutton-color" content="#002e62">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="description" content="Web site created using create-react-app" />

  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  <title>React App</title>

</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

  <script>
    function googleTranslateElementInit() {
      var config = {
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      };
      var langOptionsID = 'google_translate_element';
      new google.translate.TranslateElement(config, langOptionsID);
    }
  </script>


  <script type="text/javascript"
    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>
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
                <Link to="/" className="footer-link">
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