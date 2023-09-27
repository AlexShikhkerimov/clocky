class ClockHand {
    startTime = new Date()
    second = 1000
    baseClassName = 'clock__hand'
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

    create() {
        this.node = document.createElement('div')
        this.node.className = this.nodeClassName
        document.querySelector(`.clock__dial`).append(this.node)
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
        // console.log(this.handClassName, this.handStartValue, this.degreesPerDivision)
        // return this.handStartValue * this.degreesPerDivision
        return this.handStartValue * this.degreesPerDivision + this.startShift
    }

    start() {
        this.create()
        this.move(this.deviation)
        this.handRate()
    }
}

class secondHand extends ClockHand {
    handClassName = 'clock__second-hand'
    handStartValue = this.startTime.getSeconds()
    speed = this.second
}

class minuteHand extends ClockHand {
    handClassName = 'clock__minute-hand'
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

class hourHand extends ClockHand {
    handClassName = 'clock__hour-hand'
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

const seconds= new secondHand()
const minutes= new minuteHand()
const hours= new hourHand()

seconds.start()
minutes.start()
hours.start()