export class ClockHand {
    startTime = new Date()
    second = 1000
    baseClassName = 'clock-hand'
    handClassName = ''
    handStartValue = 0
    degreesPerDivision = 6 // number of degrees per dial division
    speed = this.second // interval for even hand's move
    shift = this.degreesPerDivision // number of degrees for even hand move
    startShift = 0
    delay = 0

    get nodeClassName() {
        return this.getClassName()
    }

    /**
     * Get number of degrees
     * @return {*}
     */
    get deviation() {
        return this.getDeviation()
    }

    create(dialNode) {
        this.node = document.createElement('div')
        this.node.className = this.nodeClassName
        dialNode.append(this.node)
    }

    move(degrees) {
        this.node.style.transform = `rotate(${degrees}deg)`
    }

    handRate() {
        let i = this.deviation + this.shift
        let timeRate = setTimeout(function tick() {
            this.move(i)
            i += this.shift;
            timeRate = setTimeout(tick.bind(this), this.speed);
        }.bind(this), this.delay);
    }

    getClassName() {
        return `${this.baseClassName} ${this.handClassName}`
    }

    getDeviation() {
        return this.handStartValue * this.degreesPerDivision + this.startShift
    }

    run(parentNode) {
        this.create(parentNode)
        this.move(this.deviation)
        this.handRate()
    }
}