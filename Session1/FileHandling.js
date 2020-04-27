const fs = require('fs');

const path = '/home/aastha/Desktop/Node/Session1/package.json';

// read a file synchronously
console.log('before sync file read');
try {
  let data = fs.readFileSync(path);
  console.log('file read synchronously found :::::', data.toString());
} catch (e) {
  console.log('unable to read a file error occured ::::::', e);
}
console.log('after sync file read');
console.log('****************************************************');

// read a file asynchronously
console.log('before async file read');
fs.readFile(path, (err, data) => {
  if (err) {
    console.log('file could not be read ####', err);
  } else {
    console.log('data is found #####', data.toString());
  }
});
console.log('after async file read');
