const { contextBridge, ipcRenderer} = require('electron')
const fs = require("fs");

contextBridge.exposeInMainWorld('settings', {
    setProxy: (proxy) => {
        ipcRenderer.send('set-proxy', proxy)
        console.log('preload_proxy: ', proxy)
    }
})

contextBridge.exposeInMainWorld('data', {
    getConfig: () => {
        return data.map
    },
    setConfig: (map) => {
        data.save(map)
    }
})

class Data {

    basepath = './.chatbox'
    filename = 'config.json'
    path = this.basepath + '/' + this.filename
    map = {}

    constructor() {
        if(!fs.existsSync(this.basepath)){
            fs.mkdirSync(this.basepath)
        }
        if(fs.existsSync(this.path)){
            const dataStr = fs.readFileSync(this.path, 'utf8')
            console.log('read:',dataStr)
            if('' !== dataStr.trim()){
                this.map = JSON.parse(dataStr)
            }
        }
    }

    save(map) {
        const mapSum = {...this.map, ...map}
        console.log('map:', mapSum)
        const jsonStr = JSON.stringify(mapSum)
        console.log('json:', jsonStr)
        fs.writeFileSync(this.path, jsonStr)
    }

}

const data = new Data()