import {
  ProxyState
} from "../AppState.js";
import {
  imageService
} from "../Services/ImageService.js";

function _drawBackground() {
  document.getElementById('body').style.backgroundImage = `url('${ProxyState.image.img}')`
}

export class ImageController {
  constructor() {
    ProxyState.on('image', _drawBackground)
    this.getImage()
  }

  async getImage() {
    try {
      imageService.getImage()
    } catch (e) {
      console.error(e);
    }
  }
}