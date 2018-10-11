console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

//console.log(_.isString(1));
//console.log(_.isString('abc'));
var filteredArray = _.uniq(['Will', '1', 'Will', 1, 2, 3, 4]);
console.log(filteredArray);

var res = notes.addNote(2, 3);
console.log(res);
//var user = os.userInfo();

//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
  //  if(err) {
    //    console.log('Unable to write to file');
    //}
//});
