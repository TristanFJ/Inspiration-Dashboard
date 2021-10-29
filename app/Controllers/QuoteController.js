import {
  ProxyState
} from "../AppState.js";
import {
  quoteService
} from "../Services/QuoteService.js";

function _drawQuote() {

  let quote = ProxyState.quote
  let template = ''
  let authorTemplate = ''
  const quotePage = document.getElementById('quote')
  const authorPage = document.getElementById('author')
  template += quote.content
  authorTemplate += quote.author
  quotePage.innerText = template
  authorPage.innerText = authorTemplate
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