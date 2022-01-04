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
