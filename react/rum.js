
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const { execSync } = require('child_process');

const colors = require('colors');

const args = process.argv.slice(2);


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


const makeComponentFile = async () => {
  await makeComponentsDir();

  let filesToMake;

  if (args.includes('mkcompfl')) {
    const fileNameIndy = args.indexOf('mkcompfl') + 1;
    filesToMake = args[fileNameIndy].split(',');
    console.log(colors.blue('Files to make: ', filesToMake));

    filesToMake.forEach(f => {
      const capitalized = f[0].toUpperCase() + f.slice(1);
      fs.writeFileSync(`./src/Components/${capitalized}.js`, 'test');
    });
  }
  

  //fs.writeFileSync(`./src/Components/${name}`, 'test');

}



if (args.includes('mkcompfl')) {
  makeComponentFile();
} 

const compTemp = name => {

  const capitalized = name[0].toUpperCase() + f.slice(1);

  const temp = `const ${capitalized} = props => {
  
    return (
      <div className="${capitalized}-container">
        <h1>${capitalized}</h1>
        <div className="${capitalized}">
          <button type="button">X</button>
        </div>
      </div>
    );
  }
  
  export default ${capitalized};`

  return temp;
}


// console.log('Comp dir variable = ', srcDir);

// const filePrompt = async () => {
//   prompt.start();

//   prompt.get(['fileName'], function (err, result) {
//       if (err) { return onErr(err); }
//       console.log('Command-line input received:');
//       console.log(` File Name: ` + result.fileName);
//       return result.fileName;
//   });

//   function onErr(err) {
//       console.log(err);
//       return 1;
//   }
// }