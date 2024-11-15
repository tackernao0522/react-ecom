import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/images/easyshop.png'
import Bars from '../../assets/images/bars.png'
import MegaMenuAll from '../home/MegaMenuAll'
import axios from 'axios'
import AppURL from '../../api/AppURL'

class NavMenuDesktop extends Component {
  constructor() {
    super()
    this.state = {
      SideNavState: 'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
      SearchKey: '',
      SearchRedirectStatus: false,
      cartCount: 0,
    }
    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.SearchOnClick = this.SearchOnClick.bind(this)
    this.MenuBarClickHandler = this.MenuBarClickHandler.bind(this)
    this.ContentOverlayClickHandler = this.ContentOverlayClickHandler.bind(this)
    this.SideNavOpenClose = this.SideNavOpenClose.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    let product_code = this.props.product_code
    // console.log(product_code)
    axios
      .get(AppURL.CartCount(product_code))
      .then((resp) => {
        this.setState({ cartCount: resp.data })
      })
      .catch((error) => {})
  }

  logout = () => {
    localStorage.clear()
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
                  {localStorage.getItem('token') ? (
                    <>
                      <Link to="/profile" className="h4 btn">
                        PROFILE
                      </Link>
                      <Link to="/" onClick={this.logout} className="h4 btn">
                        LOGOUT
                      </Link>
                      <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i>
                        {` ${this.state.cartCount} Items`}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="h4 btn">
                        LOGIN
                      </Link>
                      <Link to="/register" className="h4 btn">
                        Register
                      </Link>
                      <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> {` 0 Item`}
                      </Link>
                    </>
                  )}
                </Col>
              </Row>
              {this.searchRedirect()}
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
