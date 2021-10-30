import {
  ProxyState
} from "../AppState.js";
import {
  Temp
} from "../Models/Temp.js";
import {
  sandboxApi
} from "./AxiosService.js";

class TempService {

  constructor() {
    console.log('tempservice connected');
  }

  async getTemp() {

    const res = await sandboxApi.get('weather')
    const temp = new Temp(res.data)
    ProxyState.temp = temp
    console.log(ProxyState.temp);
  }
}

export const tempService = new TempService()