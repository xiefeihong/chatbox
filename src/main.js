const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path");
require('update-electron-app')()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegrationInWorker: true
    }
  });

  // win.loadURL('http://127.0.0.1:3000')
  win.loadFile('build/index.html');
  win.setMenu(null);
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('set-proxy', (event, proxy) => {
  const ses = event.sender.session
  ses.setProxy({proxyRules: proxy})
  console.log('main_proxy: ', proxy)
})