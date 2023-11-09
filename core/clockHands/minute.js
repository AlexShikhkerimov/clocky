import { ClockHand } from './hand.js'

export class MinuteHand extends ClockHand {
    handClassName = 'minute-hand'
    handStartValue = this.startTime.getMinutes()
    secondsPerDivision = 10
    shift = 1
    speed = this.secondsPerDivision * this.second
    startShift = this.calculateShift()

    calculateShift() {
        const secondsPassed = this.startTime.getSeconds()
        const res = secondsPassed / this.secondsPerDivision
        this.delay = (this.secondsPerDivision -(secondsPassed % this.secondsPerDivision)) * this.second
        return Math.floor(res)
    }
}