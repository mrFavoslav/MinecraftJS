const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path');

var res1 = 800;
var res2 = 600;
var fullscreenst = false;
/*var opt = require('./dist/opt.json');
var res1 = opt.user.resolution1 || opt.def.resolution1def || 800;
var res2 = opt.user.resolution2 || opt.def.resolution2def || 600;
var fullscreenst = opt.user.fullscreen || opt.def.fullscreendef || false;*/

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "MinecraftJS",
    width: parseInt(res1),
    height: parseInt(res2),
    webPreferences: {
      preload: path.join(__dirname, 'electron_preload.jsx'),
      nodeIntegration: true
    },

    fullscreen: fullscreenst,
    icon: path.join(__dirname, './dist/textures/icon.ico'),
  });

  mainWindow.loadFile('./example.html');
  mainWindow.setMenuBarVisibility(false);
};

app.on('ready', () => {
  createWindow();
});