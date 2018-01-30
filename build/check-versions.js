'use strict'
const chalk = require('chalk')            // # 一个颜色的插件，可以在终端里面输出 不同颜色的 字体
const semver = require('semver')          // # 插件  语义化版本控制的实现 （目前由npm 团队维护）   https://semver.org/lang/zh-CN/  https://cnodejs.org/topic/570f8331510629637266685a
const packageConfig = require('../package.json')
const shell = require('shelljs')          // # shell 命令的插件, 在node 中可以调用 sheel 的脚本

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),     // 当前进程的 版本信息
    versionRequirement: packageConfig.engines.node     // package.js 中要求的 node 的版本号码
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),           // # 获取当前npm 的版本号码  ？？？   exec 的用法，为何不是和上面的 获取 node 版本的方法一样    
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {  // 在build 的时候，semver 插件会检查 A所以依赖的 插件B 的版本，如果B的版本不符合A 的依赖，那么给出提示
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
