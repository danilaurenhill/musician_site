var bitcore = require('bitcore');

var privateKey = new bitcore.PrivateKey(bitcore.Networks.testnet);

var exported = privateKey.toWIF(bitcore.Networks.testnet);

console.log('WIF Private Key is: ' + exported);