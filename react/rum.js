
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const { execSync } = require('child_process');

const colors = require('colors');


/* 
 * Create `src/Components` directory if it doesn't already exist
 */
const makeComponentsDir = async () => {

  const srcDir = fs.readdirSync('./src'); 

  if (!srcDir.includes('Components')) { 
    fs.mkdirSync('./src/Components');
    return console.log('Components directory created'.cyan);
  } else {
    return console.log('Components directory already exists'.yellow);
  }
}


const filePrompt = async () => {
  prompt.start();

  prompt.get(['fileName'], function (err, result) {
      if (err) { return onErr(err); }
      console.log('Command-line input received:');
      console.log(` File Name: ` + result.fileName);
      return result.fileName;
  });

  function onErr(err) {
      console.log(err);
      return 1;
  }
}


const makeComponentFile = async () => {
  await makeComponentsDir();

  // const newFileName = await filePrompt();

  console.log('name: ', process.argv.slice(2));

  //fs.writeFileSync(`./src/Components/${name}`, 'test');

}

exports.mcf = makeComponentFile();


// console.log('Comp dir variable = ', srcDir);