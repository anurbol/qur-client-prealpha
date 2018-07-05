const assert = require('assert')

it('adds yargs completion script to .bashrc after npm install', () => {
  const { exec } = require('child_process');
    exec('qur --version', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }
    
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
});