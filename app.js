console.log('Starting app.js');
const fs = require('fs'); //file system
const os = require('os');
const notes = require('./notes.js');

var result = notes.addNotes();
console.log(result);

console.log('Result:',notes.addNumbers(9,-2));
// var user = os.userInfo();
// console.log(user);
// fs.appendFileSync('greetings.txt', 'Hello ${user.username}! You are ${note.age}');


