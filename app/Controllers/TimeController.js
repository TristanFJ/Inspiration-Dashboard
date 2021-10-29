import {
  timeService
} from "../Services/TimeService.js";

function _drawTime() {
  const timePage = document.getElementById('time')
  let date = new Date()
  let clock = date.toLocaleTimeString()
  timePage.innerText = clock
  console.log('clock');
}

function interval() {
  debugger
  let i = setInterval(_drawTime, [1000])
}

export class TimeController {
  constructor() {
    _drawTime()
    interval()

  }
}