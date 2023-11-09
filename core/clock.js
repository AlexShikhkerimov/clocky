import { Display } from './display.js'


export class Clock {
    clockNode

    constructor() {
        this.display = new Display('analog', 'default', 'base')
    }

    async create() {
        this.clockNode = document.createElement('div')
        this.clockNode.className = 'clock'
        this.clockNode.id = 'local'
        await this.display.create(this.clockNode)
        document.body.prepend(this.clockNode)
    }
}