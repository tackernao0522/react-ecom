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