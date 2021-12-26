## 311 Consume Site Info API in Client Side Part5

+ `src/components/others/Privacy.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import ReactHtmlParser from 'react-html-parser'

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

+ `src/components/others/Refund.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
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

## 312 Consume Site Info API in Client Side Part6

+ `src/components/common/FooterDesktop.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'
import AppURL from '../../api/AppURL'

class FooterDesktop extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      android_app_link: '',
      ios_app_link: '',
      facebook_link: '',
      twitter_link: '',
      instagram_link: '',
      copyright_text: '',
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
          let JsonData = resp.data[0]
          this.setState({
            address: JsonData.address,
            android_app_link: JsonData.android_app_link,
            ios_app_link: JsonData.ios_app_link,
            facebook_link: JsonData.facebook_link,
            twitter_link: JsonData.twitter_link,
            instagram_link: JsonData.instagram_link,
            copyright_text: JsonData.copyright_text,
            loaderDiv: 'd-none',
            mainDiv: '',
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
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
                      </div>
                    </div>
                  </div>
                </div>

                <div className={this.state.mainDiv}>
                  <h5 className="footer-menu-title">OFFIECE ADDRESS</h5>
                  <p>{ReactHtmlParser(this.state.address)}</p>
                </div>

                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href={this.state.facebook_link} target="_blank">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href={this.state.instagram_link} target="_blank">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href={this.state.twitter_link} target="_blank">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/about" className="footer-link">
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
                <a href={this.state.android_app_link} target="_blank">
                  <img src={Google} />
                </a>
                <br />
                <a href={this.state.ios_app_link} target="_blank">
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
                  {ReactHtmlParser(this.state.copyright_text)}
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

# Seciton29: Create and Consume Category and Subcategory and Table

## 313 Create Category and Subcategory Table

+ `Laravel Project`を編集<br>

## 315 Consume Category Subcategory API Part1

+ `src/api/AppURL.jsx`を編集<br>

```
class AppURL {
  static BaseURL = "http://localhost/api"
  static VisitorDetails = this.BaseURL + "/getvisitor"
  static AllSiteInfo = this.BaseURL + "/allsiteinfo"
  static AllCategoryDetails = this.BaseURL + "/allcategory" // 追記
}

export default AppURL
```

+ `src/components/home/HomeTop.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
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
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.MenuData} />
            </Col>
            <Col lg={9} md={9} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
```

+ `src/components/home/MegaMenu.jsx`を編集<br>

```
import React, { Component } from 'react'

class MegaMenu extends Component {
  constructor(props) {
    super()
  }

  MegaMenu() {
    var acc = document.getElementsByClassName('accordion')
    var accNum = acc.length
    var i
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  }

  render() {
    const CatList = this.props.data
    const MyView = CatList.map((CatList, i) => (
      <div key={i.toString()}>
        <button className="accordion">
          <img className="accordionMenuIcon" src={CatList.category_image} />
          &nbsp; {CatList.category_name}
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    ))

    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">{MyView}</div>
      </div>
    )
  }
}

export default MegaMenu
```

## 316 Consume Category Subcategory API Part2

+ `src/components/home/MegaMenu.jsx`を編集<br>

```
import React, { Component } from 'react'

class MegaMenu extends Component {
  constructor(props) {
    super()
  }

  MenuItemClick = (event) => {
    event.target.classList.toggle('active')
    var panel = event.target.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  }

  render() {
    const CatList = this.props.data
    const MyView = CatList.map((CatList, i) => (
      <div key={i.toString()}>
        <button onClick={this.MenuItemClick} className="accordion">
          <img className="accordionMenuIcon" src={CatList.category_image} />
          &nbsp; {CatList.category_name}
        </button>
        <div className="panel">
          <ul>
            {CatList.subcategory_name.map((SubList, i) => (
              <li>
                <a href="#" className="accordionItem">
                  {SubList.subcategory_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))

    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">{MyView}</div>
      </div>
    )
  }
}

export default MegaMenu
```

## 317 Consume Category Subcategory API Part3

+ `src/components/home/Category.jsx`を編集<br>

```
import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
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
        <Card className="h-100 w-100 text-center">
          <Card.Body>
            <img className="center" src={CatList.category_image} />
            <h5 className="category-name">{CatList.category_name}</h5>
          </Card.Body>
        </Card>
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
