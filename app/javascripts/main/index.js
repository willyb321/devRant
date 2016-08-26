var electron, path, json;

path = require('path');
json = require('../../package.json');

electron = require('electron');

electron.app.on('ready', function() {
  var window;

  window = new electron.BrowserWindow({
    title: json.name,
    // width: json.settings.width,
    // height: json.settings.height,
    // fullscreen: true,
    show: false,
  });
window.once('ready-to-show', () => {
  window.show()
  window.setFullScreen(true)
})


  // window.loadURL('file://' + path.join(__dirname, '..', '..') + '/index.html');
  window.loadURL('https://devrant.io/feed/recent');

  window.webContents.on('did-finish-load', function(){
    window.webContents.send('loaded', {
      appName: json.name,
      electronVersion: process.versions.electron,
      nodeVersion: process.versions.node,
      chromiumVersion: process.versions.chrome
    });
  });

  window.on('closed', function() {
    window = null;
  });

});
