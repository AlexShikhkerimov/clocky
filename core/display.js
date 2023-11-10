import { HourHand } from './clockHands/hour.js'
import { MinuteHand } from './clockHands/minute.js'
import { SecondHand } from './clockHands/second.js'

export class Display {
    constructor(type, theme, location) {
        this.type = type
        this.theme = theme
        this.location = location
        this.listenTabVisibility()
    }

    create(clockNode) {
        this.clockNode = clockNode
        this.displayNode = document.createElement('div')
        this.displayNode.className = this.setClassName()

        this.setDial()
        this.clockNode.append(this.displayNode)
    }

    setClassName() {
        return `display ${this.type}`
    }

    setDial() {
        this.type === 'digital' ? this.drawDigitalTableau() : this.drawAnalogDial()
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

        this.drawHands(dialNode)
        this.displayNode.append(dialNode)
    }

    drawDigitalTableau() {
        const startTime = new Date()
        const tableauNode = document.createElement('div')
        tableauNode.className = `tableau ${this.theme}`

        tableauNode.innerHTML = `
            <div class="day-segment">${startTime.getUTCDay()}</div>
            <div class="date-segment">${startTime.getDate()}</div>
            <div class="time-segment">${startTime.getTime()}</div>
            <div class="second-segment">${startTime.getSeconds()}</div>
        `

        this.displayNode.append(tableauNode)
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

    renderTableauData() {

    }

    listenTabVisibility() {
        document.addEventListener('visibilitychange', (event) => {
            if (document.visibilityState === 'visible') {
                this.create(this.clockNode)
            } else {
                this.displayNode.remove()
            }
        });
    }
}