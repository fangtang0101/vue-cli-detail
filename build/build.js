'use strict'
require('./check-versions')()         // # 引入 check-version 并执行，主要是版本控制的检查  文件 module.exports = function() (导出的就算一个func)

process.env.NODE_ENV = 'production'   // # 指定全局变量 env.NODE_ENV 值为 production

const ora = require('ora')            // # 一个很好看的 loading 插件
const rm = require('rimraf')          // #  node环境下rm -rf的命令库  用于打包前删除 旧的文件
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')     // # 显示 loading 加文字提示
spinner.start()                                       // # 显示菊花，开始转 菊花

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {  // #删除文件 文件路径(拼接而成) 
  if (err) throw err                                                              // #如果删除 文件失败 或则报错，那么脏产诶 throw 出错误
  webpack(webpackConfig, (err, stats) => {                                        // # webpack 开始打包 webpackConfig(文件路径)
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({    // # ???   http://wiki.jikexueyuan.com/project/nodejs/process.html
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
