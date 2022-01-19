import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import AppURL from '../api/AppURL'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import FavoritePage from '../pages/FavoritePage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import OrderListPage from '../pages/OrderListPage'
import PrivacyPage from '../pages/PrivacyPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'
import ProfilePage from '../pages/ProfilePage'
import PurchasePage from '../pages/PurchasePage'
import RefundPage from '../pages/RefundPage'
import RegisterPage from '../pages/RegisterPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import SearchPage from '../pages/SearchPage'
import UserLoginPage from '../pages/UserLoginPage'

class AppRoute extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
    this.setUser = this.setUser.bind(this)
  }

  componentDidMount() {
    // Login User Credentials
    axios
      .get(AppURL.UserData)
      .then((resp) => {
        this.setUser(resp.data)
      })
      .catch((error) => {
        return console.log(error)
      })
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
          <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
          <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />} />
          <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} />} />
          <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />
          <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage user={this.state.user} {...props} key={Date.now()} />} />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />
          <Route exact path="/favorite" render={(props) => <FavoritePage user={this.state.user} {...props} key={Date.now()} />} />
          <Route exact path="/cart" render={(props) => <CartPage user={this.state.user} {...props} key={Date.now()} />} />
          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} />} />
          <Route exact path="/orderlist" render={(props) => <OrderListPage {...props} key={Date.now()} />} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
