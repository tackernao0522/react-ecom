# Section20: React Necessary Configration

## 258 Install starting dependencies and create starting file folder

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

  // 一旦削除 //

</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>

</html>
```

+ `$ npm install react-bootstrap bootstrap`を実行<br>

+ `$ npm install react-slick --save`を実行<br>

+ `$ npm install slick-carousel --save`を実行<br>

+ `src/assets`ディレクトリを作成<br>

+ `src/assets/css`ディレクトリを作成<br>

+ `src/assets/images`ディレクトリを作成<br>

+ `src/components`ディレクトリを作成<br>

+ `src/pages`ディレクトリを作成<br>

+ `src/route`ディレクトリを作成<br>

+ `src/assets/css`ディレクトリに`fontawesome.css`を入れておく<br>

+ `src/assets/css/custom.css`ファイルを作成<br>

+ `src/index.js`を編集<br>

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // 追記
import '../src/assets/css/custom.css'; // 追記
import '../src/assets/css/fontawesome.css'; // 追記

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

+ `App.cssとindex.cssとlogo.svg`を削除<br>

+ `src/App.js`を編集<br>

```
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Button variant="warning">Warning</Button>
        <Button variant="info"><i className='fa fa-home'></i></Button>
      </div>
    )
  }
}

export default App
```

+ `src/assets/css/custom.css`を編集<br>

```
body {
  background-color: aquamarine;
}
```

## 259 Creating Necessary Components For Home

+ `src/components/home`ディレクトリを作成<br>

+ `src/components/common`ディレクトリを作成<br>

+ `src/components/common/NavMenuDesktop.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class NavMenuDesktop extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default NavMenuDesktop
```

+ `src/components/common/NavMenuMobile.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class NavMenuMobile extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default NavMenuMobile
```

+ `src/components/common/FooterDesktop.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class FooterDesktop extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default FooterDesktop
```

+ `src/components/common/FooterMobile.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class FooterMobile extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default FooterMobile
```

+ `src/components/home/Slider.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Slider
```

+ `src/components/home/MegaMenu.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class MegaMenu extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default MegaMenu
```

+ `src/components/home/FeaturedProducts.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class FeaturedProducts extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default FeaturedProducts
```

+ `src/components/home/Categories.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class Categories extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Categories
```

+ `src/components/home/Collection.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class Collection extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Collection
```

+ `src/components/home/NewArrival.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class NewArrival extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default NewArrival
```

## 260 Config Routingf

+ `$ npm install react-router@5.2.0`を実行<br>

+ `$ npm install react-router-dom@5.3.0`を実行<br>

+ `src/route/AppRoute.js`ファイルを作成<br>

```
import React, { Component, Fragment } from 'react'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>

      </Fragment>
    )
  }
}

export default AppRoute
```

+ `src/App.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './route/AppRoute'


class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
```

+ `src/pages/HomePage.jsx`コンポーネントを作成<br>

```
import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is our Home Page</h1>
      </Fragment>
    )
  }
}

export default HpmePage
```

+ `src/route/AppRoute.js`を編集<br>

```
import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router'
import HomePage from '../pages/HomePage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact to="/" component={HomePage} />
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute
```

## 261 Managing CSS Files

+ `src/assets/css/navMenuDesktop.css`ファイルを作成<br>

+ `src/assets/css/navMenuMobile.css`ファイルを作成<br>

+ `src/assets/css/footer.css`ファイルを作成<br>

+ `src/assets/css/bigSlider.css`ファイルを作成<br>

+ `src/assets/css/card.css`ファイルを作成<br>

+ `src/assets/css/button.css`ファイルを作成<br>

+ `src/assets/css/typo.css`ファイルを作成<br>

+ `src/assets/css/megaMenu.css`ファイルを作成<br>

+ `src/assets/css/custom.css`を編集<br>

```
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto+Condensed:ital,wght@0,400;0,700;1,300&display=swap");

@import "bigSlider.css";
@import "button.css";
@import "card.css";
@import "footer.css";
@import "megaMenu.css";
@import "navMenuDesktop.css";
@import "navMenuMobile.css";
@import "typo.css";

body {
  background-color: aquamarine;
}
```

## 262 Managing Transition and Appearing Animation

+ `$ npm install --save react-router-transition react-router-dom --force`を実行<br>

+ `src/assets/css`ディレクトリに`animate.min.css`を入れる<br>
