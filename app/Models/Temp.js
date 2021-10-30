export class Temp {
  constructor(data) {
    this.temp = data.main.temp || 0
    this.fah = ((this.temp - 273.15) * 9 / 5 + 32).toFixed(2)
    this.cel = (this.temp - 273.15).toFixed(2)
  }
}