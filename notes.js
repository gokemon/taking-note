console.log('Starting notes.js');
const fs = require('fs');
// console.log('Printing out the module details:', module);

/*makes age and its value available to use elsewhere */
module.exports.age = 49;

/* example of how arrow function looks */
// module.exports.addNotes = fucntion(){
//     // this is an exmple of an anonymous function
//     // the one below uses an arrow function
// }

module.exports.addNotes = ()=>{
    console.log('add note');
    return 'New note';
};

module.exports.addNumbers = (a,b)=>{
    return a + b;
};
