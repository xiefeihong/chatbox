export interface IElectronAPI {
    getConfig: () => Map<string, any>,
    setConfig: (map: {}) => Promise<void>,
}

declare global {
    interface Window {
        data: IElectronAPI
    }
}
