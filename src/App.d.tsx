export interface IElectronAPI {
    setProxy: (proxy: string) => Promise<void>,
}

declare global {
    interface Window {
        settings: IElectronAPI,
    }
}