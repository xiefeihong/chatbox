// import { contextBridge, ipcRenderer} from 'electron'
const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('settings', {
    setProxy: (proxy) => {
        ipcRenderer.send('set-proxy', proxy)
        console.log('proxy: ', proxy)
    }
})