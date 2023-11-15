import { SecondHand } from './clockHands/second.js';
import { MinuteHand } from './clockHands/minute.js';
import { HourHand } from './clockHands/hour.js';

export class Dial {
    constructor(theme, location) {
        this.theme = theme
        this.location = location
    }

    render(displayNode) {
        const dialNode = document.createElement('div')
        dialNode.className = `dial ${this.theme}`

        dialNode.innerHTML = `
            <div class="dial-item dial-numb numb1"></div>
            <div class="dial-item dial-line"></div>
            <div class="dial-item dial-line"></div>

            <div class="dial-item dial-numb numb2"></div>
            <div class="dial-item dial-line"></div>
            <div class="dial-item dial-line"></div>
        `

        this.drawHands(dialNode)
        displayNode.append(dialNode)
    }

    drawHands(dialNode) {
        const startTime = new Date()

        const seconds = new SecondHand(startTime)
        const minutes = new MinuteHand(startTime)
        const hours = new HourHand(startTime)

        seconds.run(dialNode)
        minutes.run(dialNode)
        hours.run(dialNode)
    }
}