#!/usr/bin/env node

const path = require('path')
const packageRootDir = path.resolve('.')

const { copyPackageJson } = require('./utils')

copyPackageJson(packageRootDir)
