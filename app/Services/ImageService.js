import {
  ProxyState
} from "../AppState.js";
import {
  Background
} from "../Models/Background.js";
import {
  sandboxApi
} from "./AxiosService.js";

class ImageService {

  constructor() {}

  async getImage() {
    const res = await sandboxApi.get('images')
    const background = new Background(res.data)
    ProxyState.image = background
  }
}
export const imageService = new ImageService()