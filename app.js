const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

// let info = os.userInfo();
// fs.appendFileSync('file.txt', "Hey line\n");
// fs.appendFileSync('file.txt', `Hey ${info.username} and your age is ${notes.age}`);

const argv = yargs.argv;
var command = argv._[0]

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  } else {
    console.log('note title taken');
  }

} else if (command ==='list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes.`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command ==='read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('note found');
    notes.logNote(note);
  }else{
    console.log('Note not found');
  }
}
else if (command === 'remove') {
  notes.removeNote(argv.title);
}else {
  console.log("oppps");
}
