## 298 Consume Visitor Details API Form Client

+ `$ npm install axios`を実行<br>

+ `src/api`ディレクトリを作成<br>

+ `src/api/AppURL.jsx`コンポーネントを作成<br>

```
class AppURL {
  static BaseURL = "http://localhost/api"
  static VisitorDetails = this.BaseURL + "/getvisitor"
}

export default AppURL
```

+ `src/pages/HomePage.jsx`を編集<br>

```
import React, { Component, Fragment } from 'react'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import NavMenuDeskTop from '../components/common/NavMenuDesktop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
    this.GetVisitorDetails()
  }

  GetVisitorDetails = () => {
    axios
      .get(AppURL.VisitorDetails)
      .then(() => {})
      .catch(() => {})
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDeskTop />
          <HomeTop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
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

export default HomePage
```

## 299 Create Contact Rest API

+ `Laravel Project`を編集<br>
