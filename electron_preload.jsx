const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,

  load_screen_1: () => ipcRenderer.invoke('load_screen_1'),
  intro_menu: () => ipcRenderer.invoke('intro_menu'),
  main_game: () => ipcRenderer.invoke('main_game'),
  menu_opt: () => ipcRenderer.invoke('menu_opt'),
  // we can also expose variables, not just functions
})