const dns = require('dns')

dns.lookup('ifwechat.com', (err, address, family)=>{
    console.log('address: %j family IPv%s', address, family)
})