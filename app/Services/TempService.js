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

  constructor() {}

  async getTemp() {

    const res = await sandboxApi.get('weather')
    const temp = new Temp(res.data)
    ProxyState.temp = temp
  }

  toggleTemp() {
    const tempPage = document.getElementById('temp')
    const fah = ProxyState.temp.fah + " °F"
    const cel = ProxyState.temp.cel + " °C"
    const kel = ProxyState.temp.temp + " °K"

    if (tempPage.innerText == fah) {
      return tempPage.innerText = cel
    } else if (tempPage.innerText == cel) {
      return tempPage.innerText = kel
    } else if (tempPage.innerText == kel) {
      return tempPage.innerText = fah
    }

  }
}

export const tempService = new TempService()