const crypto = require('crypto')

const secret = '123456'
const hash = crypto.createHmac('sha256', secret)
                    .update('你好')
                    .digest('hex')

console.log(hash)