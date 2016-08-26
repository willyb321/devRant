var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'DevRant-darwin-x64', 'DevRant.app', 'Contents', 'MacOS', 'DevRant');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'DevRant-linux-x64', 'DevRant');
      default:
        throw 'Unsupported platform';
    }
  }
};
