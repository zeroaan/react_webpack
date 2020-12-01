# react_webpack

### Environment Options

https://webpack.js.org/api/cli/#environment-options

```json
"scripts": {
    "start": "webpack serve --env development",
    // --env development : development라는 값이 true로 전달
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "deploy": "npm run build && gh-pages -d dist"
  }
```

### publicPath

- output과 devServer에서의 publicPath는 이미지나 파일들(?)을 로드하기 위해서 써줘야 한다고 하지만 HtmlWebpackPlugin을 통해 index.html과 함께 dist 폴더에 생성되기 때문에 publicPath는 기본적으로 "" 으로 설정되는 듯 하다.
- 이전에 했던 것과 directory 구조가 다름
