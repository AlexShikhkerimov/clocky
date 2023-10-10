import { HourHand } from './clockHands/hour.js'
import { MinuteHand } from './clockHands/minute.js'
import { SecondHand } from './clockHands/second.js'


export class Clock {
    seconds
    minutes
    hours

    constructor() {
        this.seconds = new SecondHand()
        this.minutes = new MinuteHand()
        this.hours = new HourHand()
    }

    start() {
        this.seconds.run()
        this.minutes.run()
        this.hours.run()
    }
    stop() {
        // Drop clock instance
    }
}