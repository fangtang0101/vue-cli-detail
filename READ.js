{
  "name": "my-app",
  "version": "1.0.0",
  "description": "study vue-cli",
  "author": "fangtang0101 <623003648@qq.com>",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",  // # --inline 当有改变的时候 刷新浏览器  # --hot 热跟新 hot modules reload 只尝试改变 组件跟新的部分
    "start": "npm run dev",                                                              // # 如果--inline 与 --hot 都存在 ，那么先尝试跟新组件改变的部分，失败了，再刷新浏览器  
    "unit": "jest --config test/unit/jest.conf.js --coverage",                           // # --config webpack 默认加载文件是 webpack.config.js,当需要加载其他文件，需要 加上 --config XX(文件名)
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e",
    "build": "node build/build.js"                   // # node 命令加载 build.js 文件                 
  },
  "dependencies": {                                  // # dependencies 生产环境依赖文件(简单理解为，在线上运行的时候依赖的插件，比方说 饿了么组件，线上运行时一直在用)  npm install --save (即可保存在这里)
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
  },
  "devDependencies": {                               //  # devDependencies dev 开发环境用到的，与生产环境相对应，主要是 一些工具 load 等(理解：压缩代码，解析转义代码等 工具，bulid之后 线上就不需要再去编译等) 
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",    // 2.0.3  大版本.次要版本.小版本
    "babel-jest": "^21.0.2",                         // ^2.0.3  次要版本 升级到最新的  ~2.0.3  小版本 升级到 最新版本  latest 安装最新版本  (不写表示 安装指定版本)
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^2.0.1",
    "chromedriver": "^2.27.2",
    "copy-webpack-plugin": "^4.0.1",
    "cross-spawn": "^5.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "nightwatch": "^0.9.12",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "selenium-server": "^3.0.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {                       // # 指定此项目 需要依赖的环境 以及 插件版本
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [                  // # 支持的浏览器
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}