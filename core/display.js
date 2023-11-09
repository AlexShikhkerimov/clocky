import { HourHand } from './clockHands/hour.js'
import { MinuteHand } from './clockHands/minute.js'
import { SecondHand } from './clockHands/second.js'

export class Display {
    constructor(type, theme, location) {
        this.type = type
        this.theme = theme
        this.location = location
        this.seconds = new SecondHand()
        this.minutes = new MinuteHand()
        this.hours = new HourHand()
    }

    setClassName() {
        return `display ${this.type}`
    }

    setDial() {
        this.type === 'digital' ? this.drawDigitalTableau() : this.drawAnalogDial()
    }

    create(clockNode) {
        this.displayNode = document.createElement('div')
        this.displayNode.className = this.setClassName()

        this.setDial()
        clockNode.append(this.displayNode)
    }

    drawAnalogDial() {
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

        this.seconds.run(dialNode)
        this.minutes.run(dialNode)
        this.hours.run(dialNode)

        this.displayNode.append(dialNode)
    }

    drawDigitalTableau() {

    }
}