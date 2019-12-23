declare global {
  declare const __DEV__: boolean
  declare interface Window {
    __DEV__: boolean
  }
  declare module NodeJS {
    interface Global {
      __DEV__: boolean
    }
  }
}
