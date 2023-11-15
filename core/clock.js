import { Display } from './display.js'

export class Clock {
    constructor(location = 'local') {
        this.location = location
        this.display = new Display('digital', 'default', this.location)
    }

    create() {
        this.clockNode = document.createElement('div')
        this.clockNode.className = `clock ${this.location}`
        this.clockNode.id = this.location
        this.display.create(this.clockNode)
        document.body.prepend(this.clockNode)
        // this.display
    }
}