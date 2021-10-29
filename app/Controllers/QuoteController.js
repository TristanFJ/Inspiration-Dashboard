import {
  ProxyState
} from "../AppState.js";
import {
  quoteService
} from "../Services/QuoteService.js";

function _drawQuote() {

  let quote = ProxyState.quote
  let template = ''
  const quotePage = document.getElementById('quote')
  console.log(quote);
  template += quote.content
  quotePage.innerText = template
}

export class QuoteController {
  constructor() {
    this.getQuote()
    ProxyState.on('quote', _drawQuote)
  }

  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (e) {
      console.error(e);
    }
  }
}