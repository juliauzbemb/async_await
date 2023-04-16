import GameSaving from "./gamesaving.js";
import json from "./parser.js";
import read from "./reader.js";

const defaultData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

export default class GameSavingLoader {
  static async load(param = defaultData) {
    try {
      const data = await read(param);
      const value = await json(data);
      const objData = JSON.parse(value);
      const result = new GameSaving(objData);
      return result;
    } catch (error) {
      throw new Error('Ошибка чтения данных');
    }
  }
}
