const request = require('request');

request({
    url: 'https://facebook.github.io/react-native/movies.json',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body));
});