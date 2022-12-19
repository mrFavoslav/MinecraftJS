const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path');

const optionsdef = require('./GAME_SETTINGS/optionsdef.json');
const optionsuser = require('./GAME_SETTINGS/optionsuser.json');

const res1 = optionsuser.resolution1 || optionsdef.resolution1def;
const res2 = optionsuser.resolution2 || optionsdef.resolution2def;
const fullscreenst = optionsuser.fullscreen || optionsdef.fullscreendef;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: parseInt(res1),
    height: parseInt(res2),
    webPreferences: {
      preload: path.join(__dirname, './RAW_CONFIG/preload.js'),
      nodeIntegration: true
    },
    fullscreen: fullscreenst,
    icon: path.join(__dirname, './RAW_CONFIG/icon.ico'),
  });

  ipcMain.handle('load_screen_1', () => {
    mainWindow.loadFile('./GAME/loading_screen/index.html')
  });

  ipcMain.handle('intro_menu', () => {
    mainWindow.loadFile('./GAME/introductory_menu/index.html')
  });

  ipcMain.handle('main_game', () => {
    mainWindow.loadFile('./GAME/main_game/index.html')
  });

  ipcMain.handle('menu_opt', () => {
    mainWindow.loadFile('./GAME/menu_options/index.html')
  });

  mainWindow.loadFile('./GAME/loading_screen/index.html');
  mainWindow.setMenuBarVisibility(false);
};

app.on('ready', () => {
  createWindow();
});