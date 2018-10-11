const {SHA256} = require('crypto-js');

var message = 'Im user number 3';
var hash = SHA256(message).toString();

console.log(message);
console.log(hash);

var data = {
    id: 4
}

var token = {
    data,
    hash: SHA256(JSON.stringify(data + 'somesecret')).toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'somescret').toString();

if(resultHash === token)


