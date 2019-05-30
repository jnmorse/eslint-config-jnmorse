const gentlyCopy = require('gently-copy')
// directory of install project
const userPath = process.env.INIT_CWD

gentlyCopy('.prettierrc', userPath)
