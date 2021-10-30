import {
  ProxyState
} from "../AppState.js"
import {
  Quote
} from "../Models/Quote.js"
import {
  sandboxApi
} from "./AxiosService.js"

class QuoteService {
  constructor() {}

  async getQuote() {

    const res = await sandboxApi.get('quotes')
    const quote = new Quote(res.data)
    ProxyState.quote = quote
  }
}

export const quoteService = new QuoteService()