var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}



shell.exec("pwd");

// shell.exec("git pull");

shell.exec("npm run start");