export class Data {

    // private map: Map<string, any>;
    private map: any;

    constructor() {
        this.map = window.data.getConfig()
        console.log('constructor:', this.map)
    }

    save() {
        window.data.setConfig(this.map)
        console.log('save:', this.map)
    }

    set(key: string, value: any) {
        // this.map.set(key, value)
        this.map[key] = value
        console.log('set:', this.map)
    }

    get(key: string) {
        console.log('get:', this.map)
        // return this.map.get(key)
        return this.map[key]
    }

}