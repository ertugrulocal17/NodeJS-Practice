const fs = require('fs');

// READ FILE
/*
fs.readFile('password.txt', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log('File Readed');
});
*/

// WRITE FILE
/*
fs.writeFile('example.json', '{"name":"Arin","age":6}', 'utf8', err => {
  if (err) console.log(err);
  console.log('The JSON data has been saved');
});
*/

// ADD DATA
/*
fs.appendFile('example.txt', '\n NodeJs ', 'utf8', err => {
  if (err) console.log(err);
  console.log('The file has been modified');
});
*/
// DELETE FILE
/*
fs.unlink('example.json', err => {
  if (err) console.log(err);
  console.log('The file has been removed');
});
*/

// CREATE FOLDER
/*
fs.mkdir('uploads/img', { recursive: true }, err => {
  if (err) console.log(err);
  console.log('Folders Created');
});
*/

// DELETE FOLDER
/*
fs.rmdir('uploads', { recursive: true }, err => {
  if (err) console.log(err);
  console.log('Folders Deleted');
});
*/
