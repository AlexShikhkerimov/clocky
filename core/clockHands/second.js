import { ClockHand } from './hand.js'
export class SecondHand extends ClockHand {
    handClassName = 'clock__second-hand'
    handStartValue = this.startTime.getSeconds()
    speed = this.second
}