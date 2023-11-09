import { ClockHand } from './hand.js'
export class SecondHand extends ClockHand {
    handClassName = 'second-hand'
    handStartValue = this.startTime.getSeconds()
    speed = this.second
}