import { ClockHand } from './hand.js'

export class HourHand extends ClockHand {
    handClassName = 'hour-hand'
    handStartValue = this.startTime.getHours()
    degreesPerDivision = 30
    secondsPerDivision = 720
    shift = 6
    speed = this.secondsPerDivision * this.second
    startShift = this.calculateShift()

    calculateShift() {
        const currentSecondsValue = this.startTime.getSeconds()
        const currentMinutesValue = this.startTime.getMinutes()
        const asd = (currentMinutesValue * 60) + currentSecondsValue
        const res = asd / this.secondsPerDivision
        this.delay = (this.secondsPerDivision - (asd % this.secondsPerDivision)) * this.second
        return Math.floor(res) * this.shift
    }
}