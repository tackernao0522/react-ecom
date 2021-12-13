## 254 Configure Manifest JSON Part1

+ `user/ecom/public`ディレクトリにicon画像を入れておく<br>

+ `user/ecom/public/{} manifest.json`を編集<br>

```
{
  "short_name": "Easy Ecommerce",
  "name": "Easy Ecommerce",
  "description": "Easy Ecommerce Ststem",
  "language": "en-US",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#002e62",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "120.png",
      "sizes": "120x120",
      "type": "image/png"
    },
    {
      "src": "128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "180.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 255 Configure Manifest JSON Part2

+ `user/ecom/public/index.html`を編集<br>

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
</body>

</html>
```

+ 反映の確認はブラウザ検証ツールのApplicationのManifestで確認できる<br>
