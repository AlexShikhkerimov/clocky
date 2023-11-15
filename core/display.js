import { Dial } from './dial.js';
import { Tableau } from './tableau.js';

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
        const dial = new Dial(this.theme, this.location)
        dial.render(this.displayNode)
    }

    drawDigitalTableau() {
        const tableau = new Tableau(this.theme, this.location)
        tableau.render(this.displayNode)
        tableau.run()
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