import {
  ProxyState
} from "../AppState.js";
import {
  Temp
} from "../Models/Temp.js";
import {
  tempService
} from "../Services/TempService.js";

function _drawTemp() {
  const tempPage = document.getElementById('temp')
  tempPage.innerText = ProxyState.temp.fah + " °F"

}


export class TempController {
  constructor() {
    console.log('tempcontroller connected');
    ProxyState.on('temp', _drawTemp)
    this.getTemp()
  }

  async getTemp() {
    try {
      await tempService.getTemp()
    } catch (e) {
      console.error(e);
    }
  }

  toggleTemp() {
    const tempPage = document.getElementById('temp')
    const fah = ProxyState.temp.fah + " °F"
    const cel = ProxyState.temp.cel + " °C"

    if (tempPage.innerText == fah) {
      return tempPage.innerText = cel
    } else {
      return tempPage.innerText = fah
    }
  }
}