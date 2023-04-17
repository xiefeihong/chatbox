const { app, BrowserWindow, Menu, ipcMain, session} = require('electron')
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 960,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // mainWindow.loadURL('http://127.0.0.1:3000')
  mainWindow.loadFile('build/index.html');
  Menu.setApplicationMenu(null)
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('set-proxy', (event, proxy) => {
  // const ses = mainWindow.webContents.session
  const ses = session.defaultSession
  ses.resolveProxy(proxy)
  console.log('UserAgent: ', ses.getUserAgent())
})