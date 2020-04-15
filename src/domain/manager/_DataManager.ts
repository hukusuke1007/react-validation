export class DataManager {
  private static _instance: DataManager
  private constructor() { }
   
  name: string = ''

  static getInstance(): DataManager {
    if (!DataManager._instance) {
      DataManager._instance = new DataManager()
    }
    return DataManager._instance
  }

}
// const dataManager = DataManager.getInstance()